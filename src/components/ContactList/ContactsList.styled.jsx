import styled from '@emotion/styled';

export const ContactsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 auto;

    max-width: 600px;
    border: 2px solid #27874f;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    &:last-child {
        border-bottom: none;
    }
`

export const RemoveBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #fff;
    color: #e31c5f;
    border: 1px solid #e31c5f;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 20px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #e31c5f;
        color: #fff;
    }
`;

export const DataContacts = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #3f3030;
`;

export const NoContacts = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    color: #0b9448;
    margin-bottom: 20px;
`;