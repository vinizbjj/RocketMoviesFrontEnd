import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
        font-size: 62.5%;
        box-shadow: 0 0 0 0;
        text-decoration: none;
        
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color:${({ theme }) => theme.COLORS.WHITE_100}; 
    }

    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        
    }

    button:hover, a:hover{
        filter: brighttness(0.9);
    }

`;