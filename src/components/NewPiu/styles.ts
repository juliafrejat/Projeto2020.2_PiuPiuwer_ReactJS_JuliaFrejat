import styled from 'styled-components';

interface NewPiuProps {
    
}

export const NewPiuComponent = styled.form<NewPiuProps>`
    background-color: #ffffff;
    color: #495057;
    padding: 15px !important;
    margin-bottom: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 5px rgb(0,0,0,0.15);
    align-items: flex-start;

    img {
        height: 50px;
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
        margin: 0px 10px;
    }
    
    .notCircImg img {
        display: inline;
        margin: 0 auto;
        margin-left: -20%;
    }

    .withinPost {
        padding: 10px 0px;
    }

    #newPost-txt {
        background-color: transparent;
        padding: 0;
        margin: 0;
        width: 80%;
    }

    .interact img {
        height: 20px;
        padding: 0;
    }

    .interact {
        width: 70% !important;
        flex-shrink: 1;
    }

    .postButtons {
        width: 85%;
        align-self: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    #errorMsg {
        font-size: 12px;
        color: #ff7f7f;
        padding-left: 75px;
    }

    .errorCounter {
        color: #ff7f7f;
        font-weight: bold;
    }
    
    .errorText {
        color: #6c757d;
    }
    
    #piupiu:disabled {
        opacity: 0.8;
    }
    
    #piupiu:disabled:hover {
        background-color: #52B788;
    }
    
    #validText {
        width: 80%;
        align-self: flex-end;
        justify-content: space-between;
    
    }
`;

interface CounterProps {
    limitReached: boolean;
}

export const Counter = styled.p<CounterProps>`
    font-size: 12px;
    padding: 0px 20px;
    color: ${props => props.limitReached ? 'var(--color-error-dark)' : 'var(--color-secondary-dark)'};
    font-weight: ${props => props.limitReached ? 'bold' : 'normal'};
`;

export const InteractionButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0 9% 0 6%;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;