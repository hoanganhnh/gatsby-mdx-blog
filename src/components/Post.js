import React from 'react';

import { PostWrapper } from '../elements';

function Post({ children }) {
    return <PostWrapper>{children}</PostWrapper>;
}

export default Post;
