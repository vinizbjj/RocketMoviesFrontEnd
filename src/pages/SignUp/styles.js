import styled from 'styled-components';
import backgroundImg from '../../assets/Img1.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-weight: 700;
        font-size: 4.8rem;
        
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
        font-size: 1.4rem;
    }

    > h2{
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-weight: 500;
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > div {
        padding: 0;
    }

    > a {
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK};  
    
    > span {
        padding: 0;
        font-weight: 400;
        margin: 42px 0 0 70px;

    > h2 {
            font-weight: 400;
        }
    }
    }    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;    

`;

