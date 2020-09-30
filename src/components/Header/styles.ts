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

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;

        .nav {
            width: fit-content;
        }

        .container-row {
            margin: 2% 0;
        }
    }
`;