import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 222px;

    padding: 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${({theme}) => theme.COLORS.PINK_100};

    border: none;
    border-radius: 16px;

    margin-bottom: 24px;

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > p {
        text-align: justify;
        color: ${({theme}) => theme.COLORS.GRAY_500};
        font-size: 16px;

        padding-bottom: 15px;

    }
`;