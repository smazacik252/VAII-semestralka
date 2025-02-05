import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";

export const StatCardStyled = styled(Card)`
    display: flex;
    flex: 1 1 50%; /* Take 50% width minus the gap */
    max-width: 50%; /* Prevent exceeding 50% width */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    border-radius: 0;
    background-color: #2F2F2F;
    .name {
        color: #727272;
    }
    .value {
        color: #F5E4C1;
    }
    
   h4 {
       margin: 0;
       padding: 0;
   } 
`