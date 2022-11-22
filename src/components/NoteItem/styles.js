import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
        
    border-radius: 10px;
    padding: 1.6rem;
    
    > button {
        border: none;
        background: none;
        font-size: 32px;
        font-weight: 400;
        margin: -35px;      

    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input{
        height: 56px;
        max-width: ${({ isNew }) => isNew ? "100%" : "113px"};
        padding: 16px;
        border-radius: 10px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
        
        font-size: 1.6rem;
        font-weight: 400;

        border: 0;

        box-shadow: 0 0 0 0;
  outline: 0;

        &::placeholder{
            color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE}
        }
    }
`;