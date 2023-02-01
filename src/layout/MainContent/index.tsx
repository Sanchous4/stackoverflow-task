import styled from 'styled-components';
import {FC} from '../../types/react';

const MainArticle = styled.article`
    display: flex;
    justify-content: center;
    padding: 10px 20px;
`;

const MainContentWrapper = styled.main`
    overflow-y: auto;
    width: 100%;
    height: 100%;
`;

const MainContent: FC = ({children}) => {
    return (
        <MainContentWrapper>
            <MainArticle>{children}</MainArticle>
        </MainContentWrapper>
    );
};
export default MainContent;
