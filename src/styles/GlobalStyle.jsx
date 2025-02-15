import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {    
        min-width: 320px;
        min-height: 100vh;
        font-family: 'Arial', sans-serif;
        line-height: 1.5;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    ul, ol {
        list-style: none;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    input, textarea {
        outline: none;
        border: none;
    }
`;

export default GlobalStyle;
