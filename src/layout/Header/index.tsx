import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import InputField from '../../components/InputField';
import useDebounce from '../../hooks/debounce';
import {clearData, fetchFilteredQuestions} from '../../stores';
import {ActionReducer} from '../../stores/types/actions';
import Navbar from '../Navbar';

const SearchBar = styled(InputField)`
    width: 30%;
    min-width: 150px;
`;

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;

const Header = () => {
    const [searchField, setSearchField] = useState('');
    const debouncedSearch = useDebounce(searchField, 1000);

    const dispatch = useDispatch<ActionReducer>();

    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname !== '/') {
            navigate('/');
        }

        if (debouncedSearch) {
            dispatch(fetchFilteredQuestions({filterText: debouncedSearch}));
        }
        return () => {
            dispatch(clearData());
        };
    }, [debouncedSearch]);

    return (
        <HeaderWrapper>
            <SearchBar
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                placeholder='Search...'
            />
            <Navbar />
        </HeaderWrapper>
    );
};
export default Header;
