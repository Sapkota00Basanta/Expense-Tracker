import ExpenseMessage from '../models/expenses.js';
import {downloadResource} from '../utils/util.js';

const getExpense = async (req, res) => {
    try {
        const expenseMessages = await ExpenseMessage.find();
        res.status(200).json(expenseMessages);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const createExpense = async (req, res) => {
    const expenses = req.body;
    const newExpense = new ExpenseMessage(expenses);

    try {
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const download = async (req, res) => {
    const fields = [
        {
            label: 'Title',
            value: 'title'
        },
        {
            label:'Amount',
            value: 'amount'
        },
        {
            label: 'Category',
            value: 'category'
        },
        {
            label: 'Date',
            value: 'date'
        }
    ];

    const data = await ExpenseMessage.find();

    return downloadResource(res, 'Expenses.csv', fields, data);
}

export {getExpense, createExpense, download};