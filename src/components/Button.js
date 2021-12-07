import React from 'react';

import { ButtonWrapper } from '../elements';

function Button({ children, href }) {
    return <ButtonWrapper to={href}>{children}</ButtonWrapper>;
}

export default Button;
