import * as express from 'express';
import {Request, Response} from 'express';
import FormFunctions from '../../formfunctions/index'
let router = express.Router();


// ---------- Gets a list of all forms ----------
router.get('/forms', async (req: Request, res: Response) => {
    const { data } = await formController.getAllForms();
    res.json({ data: data.forms });
  });

  module.exports = router;