import styled from '@emotion/styled';
import { Field } from 'formik';

export const Input = styled(Field)`
    font: inherit;
    background-color: #c4f8af;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    padding: theme.spacing(1); 
    padding-top: 25px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const LabelForm = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const ErrorText = styled.p`
    color: red;
`;

export const FormBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;