import styled from 'styled-components';
import NavbarLink from '../../components/NavbarLink';

const LinkWrapper = styled.ul`
    display: flex;
    gap: 10px;
    list-style-type: none;
`;

const Navbar = () => {
    return (
        <nav>
            <LinkWrapper>
                <NavbarLink to=''>Go to main page</NavbarLink>
            </LinkWrapper>
        </nav>
    );
};
export default Navbar;
