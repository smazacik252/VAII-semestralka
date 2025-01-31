import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";

export const HeroCardStyled = styled(Card)`
    background-color: #a49784;
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin: 0px 10px 10px 0px;
    position: relative;
    
    &:hover {
        transform: scale(1.1);
    }
    .hero-portrait img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    h3 {
        color: #ffefd7;
        text-shadow: 2px 2px black;
        position: absolute;
        margin: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
`