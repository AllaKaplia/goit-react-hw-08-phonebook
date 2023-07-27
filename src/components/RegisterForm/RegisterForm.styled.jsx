import styled from '@emotion/styled';
import { ErrorMessage, Field } from "formik";

export const LabelText = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #27874f;
`;

export const FieldInput = styled(Field)`
    font: inherit;
    background-color: #c4f8af;
    border: none;
    border-bottom: 2px solid #27874f;
    outline: none;
    padding: theme.spacing(1); 
    padding-top: 25px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ContainerForm = styled.div`
    margin: 0 auto;
    max-width: 600px;
    margin-bottom: 40px;
    flex-direction: column;
    border: 2px solid #27874f;
    border-radius: 10px;
    padding: 10px;
`;

export const TitleForm = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    color: #0b9448;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const MessageError = styled(ErrorMessage)`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;

export const BoxBig = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
`;