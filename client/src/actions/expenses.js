import { FETCH_ALL, CREATE } from "../constants/actionTypes.js";
import * as api from "../api";

//Action Creators
const getExpenses = () => async (dispatch) => {
  try {
    const { data } = await api.getExpenses();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const createExpense = (expense) => async (dispatch) => {
  try {
    const { data } = await api.createExpense(expense);
    dispatch({ type: CREATE, payload: { ...data, date: new Date(data.date) } });
  } catch (error) {
    console.log(error);
  }
};

export { getExpenses, createExpense };
