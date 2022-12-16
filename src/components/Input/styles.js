import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
 

    background: ${({theme}) => theme.COLORS.GRAY_900};
    border-radius: 10px;

    margin-bottom: 8px;
    
    > input {
        width: 100%;
        background: ${({theme}) => theme.COLORS.GRAY_900};

        padding: 16px;
        
        border: none;
        border-radius: 10px;

        height: 56px;

        color: ${({theme}) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_200};
            font-weight: 400;
            font-size: 16px;
        }

    }

    > svg {
        margin-left: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    
`;