import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import menuReducer from './reducers/menuReducer';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
