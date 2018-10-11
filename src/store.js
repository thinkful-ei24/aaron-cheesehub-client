import { createStore } from 'redux';
import cheeseReducer from './reducers/cheese';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const store = createStore(cheeseReducer, applyMiddleware(thunk));

export default store;