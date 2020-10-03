import styled from 'styled-components';

interface DropdownProps {
}

export const DropdownComponent = styled.div<DropdownProps>`
    ul {
        background-color: var(--color-primary-light);
        border-radius: 4px;
        position: fixed;
        top: 8vh;
        right: 25vw;
        z-index: 1;

    }

    li {
        font-size: 2vh;
        list-style-type: none;
        padding: 1vh;
        cursor: pointer;

        &:hover {
            background-color: var(--color-primary-lighter);
        }
    }
    
    @media (max-width: 900px) {
        ul {
            top: 10vh;
        }
    }

    @media (max-width: 500px) {
        ul {
            top: 8vh;
            right: 2vh;
        }
    }
`;