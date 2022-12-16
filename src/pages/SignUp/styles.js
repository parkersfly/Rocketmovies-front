import styled from "styled-components";
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 637px auto;
    grid-template-areas: 
    "signup background"
    ;
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 0 auto;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 48px;
        margin-top: 229px;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 14px;
    }

    > h2 {
        margin: 48px 0;
        font-weight: 500;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > button:nth-child(1n){
        margin-top: 16px;
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 42px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;