import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureImageWrapper } from '../elements';

function FeatureImage({ fixed }) {
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: { originalName: { eq: "main.jpg" } }) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `);
    return (
        <FeatureImageWrapper>
            <Img
                fixed={fixed ? fixed : data.imageSharp.fixed}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </FeatureImageWrapper>
    );
}

export default FeatureImage;
