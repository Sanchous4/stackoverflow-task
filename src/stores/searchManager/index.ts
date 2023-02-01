import {SearchManager} from './searchManager.slice';

export {fetchFilteredQuestions, fetchDetailsById} from './searchManager.thunks';
export const {clearData} = SearchManager.actions;
export const SearchManagerReducer = SearchManager.reducer;
