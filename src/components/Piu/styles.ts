import styled from 'styled-components';

interface PiuProps {
    
}

export const PiuComponent = styled.div<PiuProps>`
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

    .subdivName{
        align-items: flex-start;
        justify-content: start;
        width: fit-content;
    }
    
    .divName{
        align-items: flex-start;
        padding-bottom: 0;
    }
    
    .divNameTime{
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 0;
    }
    
    .name{
        font-weight: bold;
        padding-bottom: 2px;
    }
    
    .text{
        padding: 10px 15px;
        width: 100%;
        overflow-wrap: break-word;
    }
    
    .destaque{
        order: 1;
        background-color: #d8f3dc;
    }
    
    .notCircImg{
        width: 50px;
        height: 50px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
    }
    
    .notCircImg img{
        display: inline;
        margin: 0 auto;
        margin-left: -25%;
        padding: 0px 10px;
    }
    
    .invisible{
        display: none;
    }
`;