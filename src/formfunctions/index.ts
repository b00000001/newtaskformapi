import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export default class FormFunctions {
  options: any;
  constructor() {
    this.options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    };
  }
  //-------- Get list of all Forms --------
  getAllForms() {
    const data = axios.get(
      'https://www.formstack.com/api/v2/form.json?folders=false',
      this.options
    );
    return data;
  }
  //-------- Get form by ID --------
  getForm(id: Number) {
    const data = axios.get(
      `https://www.formstack.com/api/v2/form/${id}.json`,
      this.options
    );
    return data;
  }
  // -------- Get form submissions --------
  getFormSubmissions(id: Number) {
    const data = axios.get(
      `https://www.formstack.com/api/v2/form/${id}/submission.json`,
      this.options
    );
    return data;
  }
  // -------- Get form submission by ID --------
  getFormSubmission(submissionID: Number) {
    const data = axios.get(
      `https://www.formstack.com/api/v2/submission/${submissionID}.json`,
      this.options
    );
    return data;
  }
  // -------- Get All Fields for a specified form --------
  getFormFields(id: Number) {
    const data = axios.get(
      `https://www.formstack.com/api/v2/form/${id}/field.json`,
      this.options
    );
    return data;
  }
  // -------- New Form Submission --------
  async newFormSubmission(id: Number, data: string) {
    try {
      const options: any = {
        method: 'POST',
        url: 'https://www.formstack.com/api/v2/form/4631558/submission.json',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`
        },
        data: { read: false, field_118745518: data.name }
      };
      const data2 = axios.request(options);
      return data2;
    } catch (err) {
      console.log(err);
    }
  }
}
