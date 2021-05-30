import express from 'express';
import {getExpense, createExpense, download} from '../controllers/expenses.js';

const router = express.Router();

router.get('/api/expenses', getExpense);
router.post('/api/expenses', createExpense);
//router.get('/api/expenses/download', download);

export default router;