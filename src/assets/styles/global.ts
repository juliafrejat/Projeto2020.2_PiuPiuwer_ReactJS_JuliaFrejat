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

    html, body #root {
        height: 100vh;
    }

    body {
        background: var(--color-background);
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

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;