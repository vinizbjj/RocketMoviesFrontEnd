import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px 64px;


    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        border: none;
        border-top-right-radius: 10px;
        border-end-end-radius: 10px;

        box-shadow: 0 0 0 0;
        outline: 0;

        font-size: 1.6rem;
    }
    > svg{
        
        height: 56px;
        width: 61px;
        padding: 16px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        
        
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`;