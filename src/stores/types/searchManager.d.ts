import {QuestionsShortResponse} from '../../api/types/questions';
import {QuestionDetails} from '../../api/types/details';
import {PayloadAction, SerializedError} from '@reduxjs/toolkit';

export interface SearchManagerState {
    questionsShortResponse: Array<QuestionsShortResponse>;
    detailsById: QuestionDetails | null;
    loading: boolean | null;
    error: SerializedError | null;
}
