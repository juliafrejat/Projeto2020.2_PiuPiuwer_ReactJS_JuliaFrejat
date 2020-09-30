import styled from 'styled-components';

interface DivProps {
}

export const HalfContainer = styled.div<DivProps>`
    width: 50vw;
    padding: 0 2vw;
    align-items: center !important;
    justify-content: center !important;

    img {
    }

    h2 {
        align-self: center;
    }

    @media (max-width: 700px) {
        min-height: 25vh;
    }
`;