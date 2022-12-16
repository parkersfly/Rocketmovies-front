import styled from "styled-components";

export const Container = styled.span`
    background: ${({theme}) => theme.COLORS.GRAY_300};

    padding: 5px 16px;
    border-radius: 8px;

    font-size: 12px;
    color: ${({theme}) => theme.COLORS.GRAY_400};

    margin-right: 8px;
`;