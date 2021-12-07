import React from 'react';

import { ContainerWrapper } from '../elements';
import Nav from './Nav';
import Footer from './Footer';

function Container({ children }) {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    );
}

export default Container;
