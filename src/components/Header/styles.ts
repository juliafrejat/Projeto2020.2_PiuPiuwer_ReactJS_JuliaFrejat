import styled from 'styled-components';

interface HeaderProps {
}

export const HeaderComponent = styled.header<HeaderProps>`
    width: 100%;
    background: #52B788;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;