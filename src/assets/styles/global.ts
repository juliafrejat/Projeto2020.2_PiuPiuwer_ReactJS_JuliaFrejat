import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 60%;
        --color-background: #F8F9FA;
        --color-primary-lighter: #D8F3DC;
        --color-primary-light: #95D5B2;
        --color-primary: #52B788;
        --color-primary-dark: #40916C;
        --color-primary-darker: #1B4332;
        --color-secondary-lighter: #E9ECEF;
        --color-secondary-light: #CED4DA;
        --color-secondary: #6C757D;
        --color-secondary-dark: #495057;
        --color-secondary-darker: #343A40;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #full-body, #root {
        height: 100vh;
    }

    body {
        background: var(--color-background);
        font-family: 'Zilla Slab', 'Courier New', Courier, serif;
        text-rendering: optimizeLegibility !important;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body, input, button, textarea {
        font: 500 1.6rem Poppins;
        color: var(--color-secondary-dark);
    }

    .container {
        width: 90vw;
        max-width: 700px;
    }

    .container-row {
        display: flex;
        align-items: center;
    }

    .container-column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        height: 30px;
        padding: 0px 10px;
    }

    a {
        text-decoration: none;
        height: fit-content;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #FFFFFF;
    }

    input, textarea {
        border: none;
        background: none;
        outline: none;
        font-family: 'Zilla Slab', 'Courier New', Courier, serif;
    }

    aside {
        width: 25%;
    }
    
    hr {
        background-color: #343A40;
        opacity: 70%;
        border: 0px;
        height: 1px;
        width: 100%;
        margin: 15px 0px;
    }
    h2 {
        align-self: flex-start;
        color: #343A40;
        font-size: 25px;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;