import {createSlice} from '@reduxjs/toolkit';
import {fetchDetailsById, fetchFilteredQuestions} from './searchManager.thunks';
import {SearchManagerState} from '../types/searchManager';

const initialState: SearchManagerState = {
    questionsShortResponse: [],
    detailsById: null,
    loading: null,
    error: null,
};

export const SearchManager = createSlice({
    name: 'searchManager',
    initialState,
    reducers: {
        clearData(state) {
            state.detailsById = null;
            state.questionsShortResponse = [];
            state.error = null;
            state.loading = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilteredQuestions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchFilteredQuestions.fulfilled, (state, action) => {
            state.loading = false;
            state.questionsShortResponse = action.payload;
        });
        builder.addCase(fetchFilteredQuestions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(fetchDetailsById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDetailsById.fulfilled, (state, action) => {
            state.loading = false;
            state.detailsById = action.payload;
        });
        builder.addCase(fetchDetailsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});
