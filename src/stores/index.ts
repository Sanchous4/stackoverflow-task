import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {SearchManagerReducer} from './searchManager';

const reducer = combineReducers({
    searchManager: SearchManagerReducer,
});

const store = configureStore({reducer});

export * from './searchManager';

export default store;
