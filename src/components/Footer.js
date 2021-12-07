import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
    FooterWrapper,
    FooterSocialWrapper,
    FooterSocialIcons,
} from '../elements';

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath: { eq: "facebook.svg" }) {
                publicURL
            }
            instagram: file(relativePath: { eq: "instagram.svg" }) {
                publicURL
            }
            linked: file(relativePath: { eq: "linked.svg" }) {
                publicURL
            }
        }
    `);
    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href='https://facebook.com/' target='_blank'>
                        <img src={data.facebook.publicURL} alt='facebook' />
                    </a>
                    <a href='https://facebook.com/' target='_blank'>
                        <img src={data.instagram.publicURL} alt='instagram' />
                    </a>
                    <a href='https://facebook.com/' target='_blank'>
                        <img src={data.linked.publicURL} alt='linked' />
                    </a>
                </FooterSocialIcons>
                <p>Copyright ©2021</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    );
}

export default Footer;
