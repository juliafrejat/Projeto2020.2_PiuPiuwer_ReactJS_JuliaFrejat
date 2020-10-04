import styled from 'styled-components';

interface PiuProps {
    
}

export const PiuComponent = styled.div<PiuProps>`
    background-color: #FFFFFF;
    padding: 15px !important;
    margin-bottom: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 5px rgb(0,0,0,0.15);
    align-items: flex-start;

    p {
        font-size: 14px;
    }
    
    small {
        font-size: 12px;
    }

    img {
        height: 50px;
    }

    .withinPost {
        padding: 10px 0px;
    }
    
    .interact img {
        height: 20px;
        padding: 0;
    }

    .interact {
        flex-shrink: 1;
        justify-content: space-between;
        width: 40% !important;
        align-self: flex-start;
        margin-top: 3%
    }

    .subdivName {
        align-items: flex-start;
        justify-content: start;
        width: fit-content !important;
    }
    
    .divName {
        align-items: flex-start;
        padding-bottom: 0;
        width: fit-content !important;
    }
    
    .divNameTime {
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 0;
    }

    .divNameTime .time {
        width: fit-content !important;
        margin: 1vh 1vw;
    }
    
    .name {
        font-weight: bold;
        padding-bottom: 2px;
    }
    
    .text {
        padding: 10px 15px;
        width: 100%;
        overflow-wrap: break-word;
    }
    
    .destaque {
        order: 1;
        background-color: var(--color-primary-lighte);
    }
    
    .notCircImg {
        width: 50px;
        height: 50px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        outline: inherit;
        margin: 0 10px;
    }
    
    .notCircImg img {
        display: inline;
        margin: 0 auto;
        margin-left: -20%;
    }
`;

export const InteractionButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0 16% 0 10%;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;