import styled from '@emotion/styled';

export const LabelFilter = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;
`;

export const InputFilter = styled.input`
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

export const LabelSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 25px;
    font-weight: 600;
    color: #27874f;
`;