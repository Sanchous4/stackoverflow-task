import {errorWrapper} from '../../utils/errorWrapper';
import {getShortQuestions} from '../backend/data';

export const fetchQuestions = async ({filterText}: {filterText: string}) => {
    const res = await errorWrapper(getShortQuestions);
    return res.filter(
        (question) =>
            question.title.toLowerCase().startsWith(filterText.toLowerCase()) ||
            question.title.toLowerCase().includes(filterText.toLowerCase())
    );
};
