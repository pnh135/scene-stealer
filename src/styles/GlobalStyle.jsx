import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    body {    
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
    }
`;

export default GlobalStyle;
