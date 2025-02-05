import {Card} from "@mui/material";
import {styled} from "@mui/material/styles";

export const UserCardStyled = styled(Card)`
    display: flex;
    background: rgba(0, 0, 0, 0.6);
    color:#F5E4C1;
    border-radius: 8px;
    box-shadow: 0 5px 15px black;
    
    .img-container{
        width: 130px;
        display: flex;
        margin-right: 2%;
    }
    
    .img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .user-info-container {
        flex: .7;
    }
`