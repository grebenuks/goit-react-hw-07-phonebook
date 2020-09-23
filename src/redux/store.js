import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from '../middleWares/logger';
import { phonebookReducer } from './reducers';

const middleWares = [logger];
const store = createStore(
  phonebookReducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);
export default store;
