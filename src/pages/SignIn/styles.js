import styled from "styled-components";
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    background: ${({theme}) => theme.COLORS.RED};

    display: grid;
    grid-template-columns: 637px auto;
    grid-template-areas: 
    "login background"
    ;

    
`;

export const Form = styled.form`
    grid-area: login;

    display: flex;
    flex-direction: column;

    max-width: 340px;

    margin: 0 auto;


    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK};
        margin-top: 235px;
        
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 14px;
    }
    
    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: 500;
        margin: 48px 0;
    }

    > button:nth-child(1n){
       margin-top: 24px;
    }

    > a {
        text-align: center;
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    `;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;