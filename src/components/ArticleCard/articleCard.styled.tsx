import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";
import {Link} from "react-router-dom";

export const ArticleCardStyled = styled(Card)`
    display:flex;
    background: rgba(0, 0, 0, 0.6);
    color:#F5E4C1;
    font-size: 1.1rem;
    border-radius: 8px;
    flex: 1;
    box-shadow: 0 5px 15px black;
    max-height: 160px;
    width: 100%;
    
    &:hover {
        transform: translate(10px, -10px) scale(1.01);
        transition: transform 0.3s ease;
        box-shadow: 5px 5px 1px #F5E4C1;
        text-shadow: 2px 2px black;        
    }
    
    .text-container {
        flex: 1;
        margin-bottom: 2%;
        margin-right: 2%;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
        max-height: calc(5em * 4);

    }
    
    .img-container {
        width: 230px;
        display: flex;
        margin-right: 2%;
    }

    .img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.section-card {
        
        .text-container {
            display: flex;
            align-items: center;
        }
        
        .img-container {
            width: 80px;
            height: auto;    
        }
        
        .img-container img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
        
        h3 {
            padding: 0px;
        }

    }
`;

export const ArticleCardLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    &:hover {
        text-decoration: none; 
    }
`;

