
import styled from "styled-components";

export const Container = styled.span`
    
    font-weight: 400;
    font-size: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE_200};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 5px 14px;

    border-radius: 8px;
    margin-right: 6px;
`;
export const Thissvg = styled.i`
    
    font-weight: 400;
    font-size: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE_200};


    border-radius: 8px;
    margin: 8px 6px 0 0;

    
`;

export const Description = styled.p`

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

`;



