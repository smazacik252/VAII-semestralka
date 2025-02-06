import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";

export const LayoutStyled = styled(Container)`
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media (max-width: 768px) {
        padding: 0;
    }
`

export const ContentContainer = styled(Container)`
    display: flex;
    justify-content: space-between; 
    padding: 10px; 
    flex: 1;
    margin: 1% auto; 
    gap: 15px;
    
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const LeftContainer = styled("div")`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: .8;
    align-items: stretch;
    padding: 0 !important;
    margin: 0 25px 0 0;
`

export const RightContainer = styled("div")`
    display: flex;
    flex-direction: column;
    flex: .3;
    padding: 0 !important;
    gap: 15px;
`