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

    .withinPost {
        padding: 10px 0px;
    }

    #newPost-txt {
        background-color: #E9ECEF;
        padding: 5px 10px;
        border-radius: 20px;
    }

    .interact a {
        padding: 0px 15px
    }
    
    .interact img {
        height: 20px;
        padding: 0;
    }

    .interact {
        width: fit-content !important;
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