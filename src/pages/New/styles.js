import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";    


> main {
  grid-area: content;
  overflow-y: auto;
  overflow-x: hidden; 
}

main::-webkit-scrollbar {
    width: 8px;
}

main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};  
    border-radius: 18px;       
    border: 3px solid ${({ theme }) => theme.COLORS.PINK};
}

`;

export const Form = styled.form`
  max-width: 100%;
  margin: 38px auto;

  > header h1 {
    font-weight: 500;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    margin: 24px 104px;
  }

  > header {
    display: flex;
    flex-direction: column;
  }

  > div {
    display: flex;
    margin-left: 35px;
  }
  > div:nth-child(2) input {
    padding-left: 16px;
    border-radius: 10px;
  }

  > span {
    margin-left: 104px;
    font-weight: 400;
    font-size: 2.0rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > section {
    display: flex;
    height: 88px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    border-radius: 16px;
    margin: 30px 60px 30px 104px;
  }

  > section div {
    margin: 0;
    margin: 1.6rem;
  }

  > section > div:nth-last-child(1) {
    margin-left: 50px;
  }
  
  > div:nth-child(6) {
    padding: 0 104px 0 70px;
    display: flex;
    justify-content: space-between;
    width: 100%;  
    
  }
  
  > div:nth-child(6) button:nth-child(1) {
    width: 536px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    color: ${({ theme }) => theme.COLORS.PINK};
  } 
  > div:nth-child(6) button:nth-child(2) {
    width: 536px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  } 
  `;

export const TextArea = styled.textarea`
  width: 91%;
  height: 274px;  
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  
  border: none;
  border-radius: 10px;
  resize: none;
  box-shadow: 0 0 0 0;
  outline: 0;
  

  margin: 24px 104px 40px 104px;
  font-size: 1.6rem;
  padding-right: 20px;
  padding: 16px;


  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    

    
  }
`;