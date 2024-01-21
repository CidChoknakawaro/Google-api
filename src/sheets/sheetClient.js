import { google } from 'googleapis';
import config from '../config.js';
import key from './secrets.json' assert { type: 'json' };

export const SHEET_ID = config.sheets.id;

const client = new google.auth.JWT(key.client_email, null, key.private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
]);
const sheets = google.sheets({ version: 'v4', auth: client });

export default sheets;