import { GoogleSpreadsheet } from "google-spreadsheet";
import spreadsheetCred from "./spreadsheetCred.json";

const doc = new GoogleSpreadsheet(process.env.REACT_APP_SPREADSHEET_ID);

const composeFetchData = (method: string, body: object) =>
  method === "post" || method === "put"
    ? { body: JSON.stringify(body || {}) }
    : {};

/**
 * Returns a promise response for an HTTP request
 * Will be using this api call when making server side api calls
 */

const fetchApiCall = async (url: string, method = "", body = {}) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method,
      cache: "no-cache",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-type": "application/json",
      },
      ...composeFetchData(method, body),
    });
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};


const AllData = {
  dateInPast: (date: Date): boolean => {
    if (
      new Date(date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)
    ) {
      return true;
    }
    return false;
  },
  fetchMeetings: async () => {
    const res = await fetchApiCall("acf/v3/meeting?per_page=20", "get");
    return res;
  },
  fetchTags: async () => {
    const res = await fetchApiCall("wp/v2/tags", "get");
    return res;
  },
  fetchBusinesses: async () => {
    const res = await fetchApiCall("acf/v3/business?per_page=40", "get");
    return res;
  },
  fetchBusinessProfile: async (id: any) => {
    const res = await fetchApiCall(`acf/v3/business/${id}`, "get");
    return res;
  },
  fetchPageById: async (id: any) => {
    const res = await fetchApiCall(`wp/v2/pages/${id}`, "get");
    return res;
  },
  fetchCommunityStoriesById: async (id = 528) => {
    const res = await fetchApiCall(`acf/v3/pages/${id}`, "get");
    return res;
  },
  appendSpreadsheet: async (row: any) => {
    await doc.useServiceAccountAuth(spreadsheetCred);

    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[process.env.REACT_APP_SHEET_ID || ""];
    const result = await sheet.addRow(row);
    return result;
  },
  fetchTermsAndConditions: async () => {
    const res = await fetchApiCall("acf/v3/pages/165");
    return res;
  },
  fetchInvoiceDetails: async () => {
    const res = await fetchApiCall("acf/v3/pages/168");
    return res;
  }
};

export default AllData;