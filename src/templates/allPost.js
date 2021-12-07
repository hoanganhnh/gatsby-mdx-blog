import React from 'react';
import { graphql } from 'gatsby';
import {
    Container,
    Content,
    ContentCard,
    FeatureImage,
    Pagination,
} from '../components';
import { H1, P } from '../elements';

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        excerpt
                        date
                    }
                }
            }
        }
    }
`;

function allPost({ pageContext, data }) {
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prePage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
    const nextPage = `/${currentPage + 1}`;

    const posts = data.allMdx.edges;

    return (
        <Container>
            <FeatureImage />
            <Content>
                <H1 textAlign='center' margin='2rem 0 1rem 0'>
                    This is what a component using gatsby-image looks like:
                </H1>
                <P color='dark2' textAlign='center'>
                    For other explanations of how to get started with
                    gatsby-image, see this blog post by community member Kyle
                    Gill Image Optimization Made Easy with Gatsby.js
                </P>
                {posts.map((post) => (
                    <ContentCard
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prePage={prePage}
                nextPage={nextPage}
            />
        </Container>
    );
}

export default allPost;
