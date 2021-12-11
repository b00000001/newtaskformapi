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
        data: {
          read: false,
          field_118812312: data.requestor, // Requestor
          field_118812313: data.client, // Client
          field_118812315: data.project, // Project
          field_118812344: data.priority, // Priority
          field_118812348: data.deadline, // deadline
          field_118812349: data.lead, // Lead
          field_118812351: data.resource, // Resource
          field_118812426: data.other_resource, // Other Resource
          field_118812429: data.risk, // Risk
          field_118812430: data.task_description, // Task Description
          field_118812434: data.upload_number // File upload Number
        }
      };
      const data2 = axios.request(options);
      return data2;
    } catch (err) {
      console.log(err);
    }
  }
}
