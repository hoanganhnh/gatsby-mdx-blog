import React from 'react';

import { CardWrapper, P, H2 } from '../elements';
import Button from './Button';

function ContentCard({ date, title, excerpt, slug }) {
    return (
        <CardWrapper>
            <P
                size='xSmall'
                textAlgin='center'
                margin='0 0 0.5rem 0'
                color='dark2'
            >
                {date}
            </P>
            <H2 textAlign='center' margin='0 0 1rem 0'>
                {title}
            </H2>
            <P
                size='xSmall'
                textAlgin='center'
                margin='0 0 1.5rem 0'
                color='dark2'
            >
                {excerpt}
            </P>
            <Button href={slug}>Read more</Button>
        </CardWrapper>
    );
}

export default ContentCard;
