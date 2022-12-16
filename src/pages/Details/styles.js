import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    "header"
    "section"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
        margin: 50px auto;

        scroll-margin-left: 10px;
    }

    > section {
        width: 100%;

        div {
            display: flex;
            max-width: 1137px;
            justify-content: space-between;
            margin: 50px auto 0;

            h2 {
                font-weight: 400;
                font-size: 32px;
                color: ${({theme}) => theme.COLORS.WHITE};
            }
            

            button:last-child{
                width: 207px;
                height: 48px;

                margin-bottom: 37px;
            }
        }
    }

   
`;

export const Content = styled.div`
    max-width: 1137px;
`;