import {styled} from "@mui/material/styles";
import {Container} from "@mui/material";

export const StyledSection = styled(Container)`
    margin: 0;
    padding: 0!important;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
    h3 {
        margin: 0;
        padding: 20px;
    }
    
    .section-header {
        width: 100%;
        color:#F5E4C1;
        background-color: #417851;
        box-shadow: 0 5px 15px black;
        display: flex;
        justify-content: center;
    }
`