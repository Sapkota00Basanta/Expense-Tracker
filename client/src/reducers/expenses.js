const expenses = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    case "DOWNLOAD":
      return state;
    default:
      return state;
  }
};

export default expenses;
