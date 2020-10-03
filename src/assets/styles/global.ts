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
        --color-error-light: #FFD8D8;
        --color-error-dark: #FF7F7F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, .full-body-login, .full-body-feed, #root {
        height: 100vh;
    }

    .full-body-feed {
        background: var(--color-background);
    }

    .full-body-login {
        background: #FFFFFF;
    }

    body {
        font-family: 'Zilla Slab', 'Courier New', Courier, serif;
        text-rendering: optimizeLegibility !important;
    }

    .body {
        height: 100vh;
        align-items: center;
        justify-content: center;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body, input, button, textarea {
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

    .body {
        justify-content: start;
    }

    .big-title {
        width: 100%;
    }

    .big-title h1 {
        font-size: 6.5vw;
        color: var(--color-primary)
    }

    .big-title img {
        width: 20%;
        height: auto;
    }

    #oldPosts{
        flex-direction: column-reverse;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
    @media (max-width: 700px) {
        .body {
            flex-direction: column;
        }

        .big-title {
            justify-content: center;
        }

        .big-title img {
            height: 8vh;
        }
    }

    @media (max-width: 600px) {
        .big-title h1 {
            font-size: 5vh;
        }
    }
`;