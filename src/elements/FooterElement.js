import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${(props) => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`;

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    & p {
        text-align: center;
        flex: 0 0 100%;
        margin-top: 8px;
        pointer-events: none;
        user-select: none;
    }
`;

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;

    & img {
        padding: 0 1rem;
        transition: opacity 0.25s ease;
        width: 4rem;
        object-fit: cover;
    }

    & img:hover,
    img:focus {
        opacity: 0.7;
    }
`;
