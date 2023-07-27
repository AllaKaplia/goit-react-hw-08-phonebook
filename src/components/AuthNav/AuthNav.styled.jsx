import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const ContainerAuth = styled.div`
    display: flex;
    gap: 25px;
`;

export const StyleNav = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 25px;
    color: #fff;
    font-weight: 700;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px 16px;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
        &:hover {
            background-color: #c4f8af;
            color: #0b9448;
        };
        &:focus {
            outline: none;
            box-shadow: 0 0 5px #ccc;
        };
`;