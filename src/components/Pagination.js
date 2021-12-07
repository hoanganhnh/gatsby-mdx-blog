import React from 'react';

import { PaginationWrapper, PaginationElement } from '../elements';

function Pagination({ isFirst, isLast, prePage, nextPage }) {
    return (
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationElement to={prePage}>Previous Page</PaginationElement>
            <PaginationElement to={nextPage}>Next Page</PaginationElement>
        </PaginationWrapper>
    );
}

export default Pagination;
