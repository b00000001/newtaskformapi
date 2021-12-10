import express, { Request, Response } from 'express';
import FormFunctions from './formfunctions/index';
const app = express();
const PORT = process.env.PORT || 3000;

const formController = new FormFunctions();
app.get('/', (req: Request, res: Response) => {
    res.json({message: "Welcome to the form API"});
}
  )



// ---------- Server start ----------
app.listen(PORT, (req: Request, res: Response) => {
  console.log(`Server is running on port ${PORT}`);
});
