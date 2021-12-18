import { Router, Request, Response, ErrorRequestHandler } from 'express';
import FormFunctions from '../formfunctions';
import connection from '../db/connection';
import fs from 'fs';
import { isForStatement } from 'typescript';

const formController = new FormFunctions();
const router = Router();

const addOldToDb = (ids) => {
  ids.forEach((id) => {
    // connection.query(
    //   'INSERT INTO newtaskform SET ?', data,
    //   (err, result) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //   }
    // );
  });
};

//-------- Just a standard greeting for the / route --------
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the task form API' });
});

// -------- Will List ALL forms --------
router.get('/forms', async (req: Request, res: Response) => {
  try {
    const { data } = await formController.getAllForms();
    res.json({ data });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});
// so far this just logs an array filled with submission details
router.get('/list/:id', async (req: Request, res: Response) => {
  const idArr: any = [];
  const submissionsArr = [];
  try {
    const { data } = await formController.listFormSubmissions(
      parseInt(req.params.id)
    );
    data.submissions.forEach((submission) => {
      idArr.push(submission.id);
    });
    for (let i = 0; i < idArr.length; i++) {
      const { data } = await formController.getFormSubmission(idArr[i]);
      submissionsArr.push(data.data);
    }
    submissionsArr.forEach((submission) => {
      const res = submission.reduce(
        (obj, item) => Object.assign(obj, { [item.field]: item.value }),
        {}
      ); // this reduces the array of object to just one object
      console.log({
        requestor: res['116495933'] || null,
        client: res['115659759'],
        project: res['115659467'],
        task_title: res['115659468'],
        priority: res['115660142'],
        deadline: res['115660255'],
        lead: res['115780615'],
        resource: res['115769694'],
        other_resource: res['115810449'],
        risk: res['115660450'],
        task_description: res['115660467'],
        file_count: res['116172363']
      });
    });

    res.json(submissionsArr);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// -------- Will List ALL Submissions for a given form --------
// ie: /submissions/4539136/
router.get('/submissions/:id', async (req: Request, res: Response) => {
  try {
    const { data } = await formController.getFormSubmissions(
      parseInt(req.params.id)
    );
    res.json({ data });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// -------- Will List info for specific submission --------
// ie: /submission/866922837/
router.get('/submission/:id', async (req: Request, res: Response) => {
  try {
    const { data } = await formController.getFormSubmission(
      parseInt(req.params.id)
    );
    res.json({ data });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// -------- Will List all fiels for specified form -------
// ie: /form/4539136/field
router.get('/form/:id/field', async (req: Request, res: Response) => {
  try {
    const { data } = await formController.getFormFields(
      parseInt(req.params.id)
    );
    res.json({ data });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// -------- Will make new submission for form --------
// ie: /form/4631558/submit
router.post('/form/:id/submit', async (req: Request, res: Response) => {
  try {
    const { data, data2 } = await formController.newFormSubmission(
      parseInt(req.params.id),
      req.body
    );
    res.json({ data, data2 });
    // res.json({ data2 });
    connection.query('INSERT INTO newtaskform SET ?', data, (err, res) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log('Record inserted successfully');
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
