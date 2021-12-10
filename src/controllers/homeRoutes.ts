const router = require('express').Router();
import { Request, Response } from 'express';
import FormFunctions from '../formfunctions';

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the task form API' });
});

router.get('/forms', async (req: Request, res: Response) => {
  const formController = new FormFunctions();
  const { data } = await formController.getAllForms();
  res.json({ data });
});

module.exports = router;
