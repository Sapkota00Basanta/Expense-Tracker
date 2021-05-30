import axios from "axios";
import {baseURL} from '../env.json';

const url = `${baseURL}/api/expenses`;

export const getExpenses = () => axios.get(url);
export const createExpense = (newExpense) => axios.post(url, newExpense);