import {styled} from "@mui/material/styles";


export const StyledHeader = styled("header")`
    display: flex;
    flex-direction: column;
    margin: 5px;
    color: #F5E4C1;
    font-weight: 900;
    
    .upper-container {
        display: flex;
        flex-direction: row;
    }
    
    .logo-container {
        display: flex;
        flex: 0.5;
        align-items: center;
        min-height: 200px;
        img {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 768px) {
        .logo-container {
            flex: 1;
        }
    }

    
`;

