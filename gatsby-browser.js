import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import Theme from './src/themes/theme';
import { Table } from './src/components';

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

const components = {
    table: Table,
    // pre: (preProps) => {
    //     const props = preToCodeBlock(preProps);
    //     // if there's a codeString and some props, we passed the test
    //     if (props) {
    //         return <Code {...props} />;
    //     }
    //     // it's possible to have a pre without a code in it
    //     return <pre {...preProps} />;
    // },
    // wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {element}
        </ThemeProvider>
    </MDXProvider>
);
