/* combining multiple reducers here*/
import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

/* key value pair: eg: account -> key, accountReducer -> value */
const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
