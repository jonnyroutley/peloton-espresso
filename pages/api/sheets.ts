import { google } from "googleapis";

export type SheetItem = {
    name: string;
    price: string;
}


export async function getDataFromSheets(sheetName: string) {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: sheetName,
    });

    const rows = response.data.values;
    return rows
  } catch (err) {
    console.log(err);
  }

  return [];
}


