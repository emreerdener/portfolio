import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

let doc: GoogleSpreadsheet | null = null;

export async function logQueryToSheet(query: string) {
  if (
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_SHEET_ID
  ) {
    console.warn('Google Sheets credentials missing. Skipping logging.');
    return;
  }

  try {
    if (!doc) {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
      await doc.loadInfo();
    }

    const sheet = doc.sheetsByIndex[0];

    // Ensure headers exist
    try {
      await sheet.loadHeaderRow();
    } catch (e) {
      // If loading headers fails (e.g. empty sheet), we create them.
      // We catch the error here because accessing sheet.headerValues throws if headers aren't loaded.
      await sheet.setHeaderRow(['Timestamp', 'Query']);
    }

    await sheet.addRow([
      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      query,
    ]);
  } catch (error) {
    console.error('Error logging to Google Sheet:', error);
  }
}
