import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export default class FormFunctions {
  //-------- Get list of all Forms --------
  getAllForms() {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    };
    const data = axios.get(
      'https://www.formstack.com/api/v2/form.json?folders=false',
      options
    );
    return data;
  }
  //-------- Get form by ID --------
  getForm(id: Number) {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    };
    const data = axios.get(
      `https://www.formstack.com/api/v2/form/${id}.json`,
      options
    );
    return data;
  }
  // -------- Get form submissions --------
  getFormSubmissions(id: Number) {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    };
    const data = axios.get(
      `https://www.formstack.com/api/v2/form/${id}/submission.json`,
      options
    );
    return data;
  }
  // -------- Get form submission by ID --------
  getFormSubmission(submissionID: Number) {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    };
    const data = axios.get(
      `https://www.formstack.com/api/v2/submission/${submissionID}.json`,
      options
    );
    return data;
  }
}
