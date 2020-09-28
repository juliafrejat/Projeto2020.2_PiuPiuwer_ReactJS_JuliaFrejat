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
    background-color: #ffffff;
    border: 1px solid #CED4DA;
    color: #95D5B2;
    font-size: 15px;
`;