import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

export const HeaderContainer = styled(Container)`
    display: flex;
 
    height: 84px;
    width: 100%;
    background-color:   #417851;
    flex: 1;
    padding:0;
    margin:0;

    a {
        color: #F5E4C1;
        text-decoration: none;
    }
    
    span {
        display: flex;
        flex-direction: column;
        color: #F5E4C1;
    }
`

export const HeaderButton = styled(Button)`
    color: #F5E4C1;
    background-color: none;
    margin-left: 5px;
`