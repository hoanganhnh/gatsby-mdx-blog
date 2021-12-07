import React from 'react';

import { ContainerWrapper } from '../elements';
import Nav from './Nav';

function Container({ children }) {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
        </ContainerWrapper>
    );
}

export default Container;
