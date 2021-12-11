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
  newFormSubmission(id: Number, data: any) {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      },
      body: JSON.stringify({
        user_agent: 'User Agent Header',
        remote_addr: 'Client IP',
        read: false,
        field_x: { Testing: 'Testing' },
        encryption_password: 'password'
      })
    };
    const data2 = axios.post(
      `https://www.formstack.com/api/v2/form/${id}/submission.json`,
      options
    );
    return data2;
  }
}
