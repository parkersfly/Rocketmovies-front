import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    background: ${({theme}) => theme.COLORS.PINK};
    border: none;
    border-radius: 10px;

    font-weight: 500;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
`;