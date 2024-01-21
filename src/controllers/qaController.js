import qAndASchema from '../sheets/qaSchema.js';
import { ZodError } from 'zod';
import sheets, { SHEET_ID } from "../sheets/sheetClient.js"

const addQa = async (req, res) => {
    try {
      const body = qAndASchema.parse(req.body);
  
      // Object to Sheets
      const rows = Object.values(body);
      // console.log(rows);
  
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'q&a!A:B',
        insertDataOption: 'INSERT_ROWS',
        valueInputOption: 'RAW',
        requestBody: {
          values: [rows],
        },
      });
      res.json({ message: 'Data added successfully' });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error });
      }
    }
}

export { addQa }