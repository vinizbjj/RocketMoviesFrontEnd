import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

main {
    grid-area: content;
    overflow-y: auto;
    overflow-x: hidden;
        
}

main::-webkit-scrollbar {
    width: 13px;
}


main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};  
    border-radius: 18px;       
    border: 3px solid ${({ theme }) => theme.COLORS.PINK};
}

main section p {
    padding: 0 104px;
    margin-top: 40px;
    min-height: 300px;
    -webkit-box-orient: horizontal;
    overflow-y: scroll;
}

`;

export const Star = styled.button`
    border: none;
    background: none;

> svg { 
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 20px;
    }
`;

export const Img = styled.div`

    display: flex;
    align-items: center;

    font-size: 16px;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

> img {
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 3.5rem;       
       
    cursor: pointer;
}

>  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
} 
`;


