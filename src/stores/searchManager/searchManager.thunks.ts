import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchDetails} from '../../api/services/fetchDetails';
import {fetchQuestions} from '../../api/services/fetchQuestions';

export const fetchFilteredQuestions = createAsyncThunk(
    'questionsShortResponse',
    async ({filterText}: {filterText: string}) => {
        const response = await fetchQuestions({filterText});
        console.log({response});
        return response;
    }
);

export const fetchDetailsById = createAsyncThunk(
    'questionDetails',
    async ({id}: {id: number}) => {
        const response = await fetchDetails({id});
        console.log({response});
        return Array.isArray(response) ? null : response;
    }
);
