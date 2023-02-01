import {errorWrapper} from '../../utils/errorWrapper';
import {getQuestionDetails} from '../backend/data';

export const fetchDetails = async ({id}: {id: number}) => {
    const res = await errorWrapper(() => getQuestionDetails({id}));
    return res;
};
