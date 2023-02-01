import {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Answers from '../../components/Answers';
import Loader from '../../components/Loader';
import MainContent from '../../layout/MainContent';
import {clearData, fetchDetailsById} from '../../stores';
import {ActionReducer} from '../../stores/types/actions';
import {CombinedReducer} from '../../stores/types/combinedReducer';

const QuestionDetails = () => {
    const {id} = useParams();

    const {detailsById, loading} = useSelector(
        (state: CombinedReducer) => state.searchManager
    );
    const dispatch = useDispatch<ActionReducer>();

    const hasDetails = detailsById !== null;
    useLayoutEffect(() => {
        dispatch(fetchDetailsById({id: parseInt(id || '')}));
    }, [id]);

    console.log({detailsById});

    return (
        <MainContent>
            {loading && <Loader />}
            {hasDetails && !loading && <Answers details={detailsById} />}
        </MainContent>
    );
};
export default QuestionDetails;
