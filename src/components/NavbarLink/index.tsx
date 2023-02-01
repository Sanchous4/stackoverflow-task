import {Link, LinkProps} from 'react-router-dom';
import styled from 'styled-components';
import {FC} from '../../types/react';

const PageLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: #9499ff;
    }
`;

const NavbarLink: FC<LinkProps> = (props) => {
    return (
        <li>
            <PageLink {...props}>{props.children}</PageLink>
        </li>
    );
};
export default NavbarLink;
