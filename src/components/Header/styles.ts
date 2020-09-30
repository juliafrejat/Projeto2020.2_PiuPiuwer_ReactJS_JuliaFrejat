import styled from 'styled-components';

interface HeaderProps {
}

export const HeaderComponent = styled.header<HeaderProps>`
    width: 100vw;
    background: #52B788;
    padding: 1vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;