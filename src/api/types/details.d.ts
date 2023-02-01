import {QuestionsShortResponse} from './questions';

export interface Answer {
    score: number;
    answer: string;
}

export interface QuestionDetails extends QuestionsShortResponse {
    description: string;
    answers: Answer[];
}
