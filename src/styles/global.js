import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        main::-webkit-scrollbar {
        width: 8px;              
        }

        main::-webkit-scrollbar-track {
        background: none;       
        }

        main::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.PINK};    
        border-radius: 20px; 
        }
    }

    body {
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }

    body, button, input {
        outline: none;
        font-family: 'Roboto Slab', serif;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: opacity(0.9);
    }

    a {
        text-decoration: none;
    }
`;