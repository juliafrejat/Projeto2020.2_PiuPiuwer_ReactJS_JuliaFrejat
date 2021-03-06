import styled from 'styled-components';

interface HeaderProps {
    backgroundColor: string;
    border: string;
    justification: string;
}

export const HeaderComponent = styled.header<HeaderProps>`
    width: 100vw;
    background: ${props => props.backgroundColor};
    border-bottom: ${props => props.border};
    padding: 1vh;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justification};

    a {
        color: #FFFFFF;
    }

    .nav {
        width: 40vw;
        justify-content: space-between;
    }

    .title img{
        height: 50px;
    }

    .title {
        font-size: 2vh;
    }

    #more img{
        height: 20px;
    }
    
    .search img{
        height: 18px;
    }

    .search{
        background-color: #ffffff;
        padding: 5px 10px;
        border-radius: 25px;
    }
    
    .search input{
        color: #343A40;
        line-height: 20px;
        margin: 2px 10px;
    }
    
    .search button{
        border: none;
        background: none;
        outline: none;
    }

    Button {
        margin: 0.5vh;
    }

    .nav button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .nav button:active, .nav button:focus {
        outline: none;
        border: none;
    }

    

    @media (max-width: 900px) {
        .nav {
            width: 70%;
            min-width: fit-content;
            align-items: space-around;
            padding: 0 5%;
        }

        .title {
            display: none;
        }

        .search {
            width: fit-content;
            border: 50%;
        }

        .search img {
            margin: 0;
            padding: 0;
        }

        .search input {
            width: 10vh;
        }

        .container-row {
            margin: 2% 0;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`;