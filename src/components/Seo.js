import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
    query DefaulySEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
                twitterUsername
            }
        }
    }
`;

const Seo = ({ description, keywords, title, image, url, author }) => {
    // @TODO: change below my url
    const site = 'https://github.com/';

    return (
        <StaticQuery
            query={detailsQuery}
            render={(data) => {
                const twitterUser = data.site.siteMetadata.twitterUsername;
                const metaDescription = description
                    ? description
                    : data.site.siteMetadata.description;
                const metaTitle = title ? title : data.site.siteMetadata.title;
                const metaAuthor = author ? author : data.site.siteMetadata.author;
                const metaUrl = url ? url : data.site.siteMetadata.url;
                const metaImage = image ? `${site}${image}` : data.site.siteMetadata.image;
                const metaKeywords = keywords ? keywords : ['gatsby blog', 'gatsby MDX blog'];
                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: `author`,
                                content: metaAuthor,
                            },
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:image`,
                                content: metaImage,
                            },
                            {
                                property: `og:url`,
                                content: metaUrl,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary_large_image`,
                            },
                            {
                                name: `twitter:creator`,
                                content: twitterUser,
                            },
                            {
                                name: `twitter:title`,
                                content: metaTitle,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                name: `twitter:image`,
                                content: metaImage,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0
                                ? {
                                      name: `keywords`,
                                      content: metaKeywords.join(`, `),
                                  }
                                : []
                        )}
                    />
                );
            }}
        />
    );
};

export default Seo;
