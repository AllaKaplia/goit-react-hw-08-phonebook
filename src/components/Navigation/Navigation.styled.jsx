import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';
import { NavLink } from "react-router-dom";

export const StyleLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 25px;
    color: #fff;
    font-weight: 700;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;

export const Problem = styled(ErrorMessage)`
    font-size: 25px;
    color: red;
`