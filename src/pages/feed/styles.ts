import styled from 'styled-components';

interface DivProps {
}

export const Body = styled.div<DivProps>`
    justify-content: center;
    align-items: flex-start !important;
    width: 90vw;

    .container-column{
        padding: 50px 25px 0 25px;
    }

    .container-row, #posts .container-column{
        width: 100%;
        padding: 0;
    }

    #posts{
        width: 40%;
    }

    #posts .container-row{
        padding: 5px 0;
    }

    @media (max-width: 700px) {
        width: 100vw;

        aside {
            display: none;
        }

        #posts {
            width: 90vw;
        }
    }

    @media (max-width: 970px) {
        width: 100vw;
    }
`;

interface NewPostProps {
}

export const NewPost = styled.div<NewPostProps>`
`;