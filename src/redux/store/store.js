/* creating a store*/
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

//store is reducers + default state
export const store = createStore(reducers, {}, applyMiddleware(thunk));
