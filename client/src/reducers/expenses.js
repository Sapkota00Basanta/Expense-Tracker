import { FETCH_ALL, CREATE } from "../constants/actionTypes.js";

const expenses = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default expenses;
