import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        font-family: ${(props) => props.theme.fonts.main};
        background-color: ${(props) => props.theme.colors.light1}
    }

`;

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
);
