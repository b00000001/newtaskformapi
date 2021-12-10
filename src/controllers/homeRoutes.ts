const router = require('express').Router();
import { Request, Response } from 'express';
import FormFunctions from '../formfunctions';

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

module.exports = router;

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
