import styled from 'styled-components';

interface FooterProps {
}

export const FooterComponent = styled.div<FooterProps>`
    width: 100%;
    height: 5%;
    position: fixed;
    left: 0;
    bottom: 0;
    justify-content: center;
    background-color: #FFFFFF;
    border: 1px solid var(--color-secondary-light);
    color: var(--color-primary-light);
    font-size: 15px;

    .links {
        width: 100%;
        max-width: 800px;
        justify-content: space-around;
    }

    a {
        color: var(--color-primary-light);
    }

    @media (max-width: 500px) {
        height: 6%;
        div {
            height: 100%;
            flex-direction: column;
            flex-wrap: wrap;
        }
    }
`;