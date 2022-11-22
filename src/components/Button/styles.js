import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    height: 56px;
    border: 0;
    border-radius: 1rem;
    padding: 0 16px;
    margin-top: 2.4rem;
    font-weight: 500;
    font-size: 1.6rem;

    &:disabled{
        opacity: 0.5;
    }
`;