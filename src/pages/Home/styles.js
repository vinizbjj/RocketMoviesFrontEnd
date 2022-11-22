import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 160px 128px auto;
    grid-template-areas:
    "header"
    "section"
    "content";

    overflow-x: hidden; 

    svg { 
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 20px;
    }

> Section {
    width: 100%;
    max-height: 42px;

    display: flex;
    justify-content: space-between;

    align-items: center;
    padding: 1px 104px; 
}

> Section h2{
        font-size: 3.2rem;
        font-weight: 400;      
}
    
> main {
    grid-area: content;
    overflow-y: auto;
    overflow-x: hidden; 
    width:100%;
    height:500px;
    padding: 0 123px;    
}


main::-webkit-scrollbar {
    width: 8px;
}


main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};  
    border-radius: 18px;       
    border: 3px solid ${({ theme }) => theme.COLORS.PINK};
} 

> main div button p{
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};    
}
   
`;

export const NewNote = styled(Link)`
    width: 207px;
    height: 48px;

    display: flex;
    align-items: center;

    padding-left: 32px;
    gap: 8px;


    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 8px;
    border-style: none;

    > svg {
        font-size: 16px;

    }

    > h3 {
        font-size: 1.6rem;
        font-weight: 400;
    }  

`;

export const Content = styled.div`


margin-bottom: 32px;
border-radius: 16px;
margin-bottom: 24px;

a {
    color: ${({ theme }) => theme.COLORS.WHITE_100};


}

> a h4 {
    width: 100px;
    font-size: 2.4rem;
    font-weight: 700;
    cursor: pointer;
}

> p {
    display: -webkit-box;
    max-width: 100%;
    height: 50.2px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.625;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
}

> button svg {
    font-size: 16px;
    padding-right: 2px;
    margin: 2px 0;
}
> span {
    line-height: 65px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
}
`;

