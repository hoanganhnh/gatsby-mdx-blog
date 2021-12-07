import React from 'react';

import { Container, Content, ContentCard, FeatureImage } from '../components';

export default function App() {
    return (
        <Container>
            <FeatureImage />
            <Content>
                <ContentCard
                    date='1'
                    title='Hello'
                    excerpt='haha'
                    slug='lolo'
                />
            </Content>
        </Container>
    );
}
