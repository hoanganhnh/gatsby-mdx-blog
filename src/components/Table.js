import React from 'react';

import { TableWrapper } from '../elements';

function Table({ children }) {
    return (
        <TableWrapper>
            <table>{children}</table>
        </TableWrapper>
    );
}

export default Table;
