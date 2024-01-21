import express from 'express';
import { addQa } from '../controllers/qaController.js';

const router = express.Router()

router.post('/add', addQa)

export default router