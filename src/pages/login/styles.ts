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
        min-width:250px;
        font-size: 4.5vh;
        margin-bottom: 3vh;
        color: var(--color-secondary-darker);
    }

    p {
        margin-top: 15px;
        color: var(--color-primary-dark);
        cursor: pointer;
    }

    p:hover{
        color: var(--color-primary-darker);
    }

    Button {
        margin-top: 8%;
    }

    @media (max-width: 700px) {
        min-height: 25vh;
        width: 100vw;
    }
`;