import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 116px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_BORDER};

    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 24px 123px;
`;

export const Logo = styled.div`
    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Search = styled.div`
    width: 630px;
`;

export const Profile = styled.div`

    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;

        strong {
            color: ${({theme}) => theme.COLORS.WHITE};
        }

        a {
            text-align: end;
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;