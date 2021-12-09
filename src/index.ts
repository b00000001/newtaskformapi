import express, { Request, Response } from 'express';
import FormFunctions from './formfunctions/index';
const app = express();
const PORT = process.env.PORT || 3000;

const formController = new FormFunctions();

app.get('/', async (req: Request, res: Response) => {
  const { data } = await formController.getAllForms();
  res.json({ data: data.forms });
});

app.listen(PORT, (req: Request, res: Response) => {
  console.log(`Server is running on port ${PORT}`);
});
