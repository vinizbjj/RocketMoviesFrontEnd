import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size:  1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`;