const router = require('express').Router();
import { Request, Response } from 'express';
import FormFunctions from '../formfunctions';
import connection from '../db/connection';

//-------- Just a standard greeting for the / route --------
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the task form API' });
});

// -------- Will List ALL forms --------
router.get('/forms', async (req: Request, res: Response) => {
  try {
    const formController = new FormFunctions();
    const { data } = await formController.getAllForms();
    res.json({ data });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// -------- Will List ALL Submissions for a given form --------
// ie: /submissions/4539136/
router.get('/submissions/:id', async (req: Request, res: Response) => {
  try {
    const formController = new FormFunctions();
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
    const formController = new FormFunctions();
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
    const formController = new FormFunctions();
    const { data } = await formController.getFormFields(
      parseInt(req.params.id)
    );
    res.json({ data });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// -------- Will make new submission for form --------

router.post('/form/:id/submit', async (req: Request, res: Response) => {
  try {
    const formController = new FormFunctions();
    const { data } = await formController.newFormSubmission(
      parseInt(req.params.id),
      req.body
    );
    const { data2 } = await formController.newFormSubmission(
      parseInt(req.params.id),
      req.body
    );
    console.log(data);
    res.json({ data2 });
    connection.query(
      'INSERT INTO newtaskform SET ?',
      {
        requestor: data.requestor,
        client: data.client,
        project: data.project,
        task_title: data.task_title,
        priority: data.priority,
        deadline: data.deadline,
        lead_name: data.lead_name,
        resource: data.resource,
        other_resource: data.other_resource,
        risk: data.risk,
        task_description: data.task_description,
        file_count: data.file_count
      },
      (err, res) => {
        if (err) throw err;
        console.log('record inserted');
      }
    );
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
