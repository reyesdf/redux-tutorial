/*
create a reducer
a function that returns a STATE
*/

/* parameters: initial state and action */
const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;
