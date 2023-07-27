import styled from '@emotion/styled';

export const BoxHome = styled.div`
    padding-left: 15px;
    padding-right: 15px;

    @media screen and (min-width: 480px) {
        width: 396px;
        margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
        width: 738px;
    }

    @media screen and (min-width: 1200px) {
        width: 1440px;
    }
`;

export const TitleHome = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    color: #0b9448;
    margin-bottom: 20px;
`;

export const HeroHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
`;

export const MainImg = styled.img`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

export const Text = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #27874f;
`;

export const List = styled.ul`
    padding: 15px;
    font-size: 18px;
    color: #39aa39;
`;