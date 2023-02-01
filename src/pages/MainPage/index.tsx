import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';
import MainPageTitle from '../../components/MainPageTitle';
import Table from '../../components/Table';
import MainContent from '../../layout/MainContent';
import {CombinedReducer} from '../../stores/types/combinedReducer';

const MainPage = () => {
    const {questionsShortResponse, loading} = useSelector(
        (state: CombinedReducer) => state.searchManager
    );
    const isFirstLoading = loading === null;
    console.log({questionsShortResponse, loading});

    return (
        <MainContent>
            <>
                {isFirstLoading ? (
                    <MainPageTitle>
                        Type your query in search field
                    </MainPageTitle>
                ) : null}
                {!isFirstLoading && loading && <Loader />}
                {!isFirstLoading &&
                    !loading &&
                    (questionsShortResponse.length ? (
                        <Table questions={questionsShortResponse} />
                    ) : (
                        <MainPageTitle>Not found</MainPageTitle>
                    ))}
            </>
        </MainContent>
    );
};
export default MainPage;
