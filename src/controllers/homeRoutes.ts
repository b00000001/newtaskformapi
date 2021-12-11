const router = require('express').Router();
import { Request, Response } from 'express';
import FormFunctions from '../formfunctions';

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
    const { data } = await formController.newFormSubmission(parseInt(req.params.id), req.body);
    res.json({ data });
    
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
