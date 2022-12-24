import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 144px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};    

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};  

    display: flex;    
    align-items: center;

    padding: 24px 123px;  
   
    h1 {

    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    }

`;

export const Profile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    

    > a img {
       width: 56px;
       height: 56px;
       border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
       border-radius: 3.5rem;
       margin-left: 10px;
       cursor: pointer;
}

    > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    line-height: 1.2rem;
    align-items: flex-end;
    padding-left: 70px;
    }
    
    > div:nth-child(3) {
    display: flex;
    width: 16rem;
    flex-direction: column;
    line-height: 1.2rem;
    align-items: flex-end;    
    }   
    
    span {
        justify-items: end;
        font-weight: 400;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        cursor: pointer;
    }
    
    strong {
        font-weight: 700;
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    > div :nth-child(1){
    max-width: 100%;
    border-radius: 10px;
    padding-left: 8px;
}


`;