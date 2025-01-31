import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";
import {Link} from "react-router-dom";

export const ArticleCardStyled = styled(Card)`
    display:flex;
    background-color: #417851;
    color:#F5E4C1;
    flex: 1;
    box-shadow: 0 5px 15px black;
    margin: 15px;
    max-height: 160px;
    width: 100%;
    
    &:hover {
        transform: translate(10px, -10px) scale(1.01);
        box-shadow: 5px 5px 1px #F5E4C1;
        text-shadow: 2px 2px black;        
    }
    
    .text-container {
        flex: 1;
        margin-bottom: 2%;
        margin-right: 2%;
        overflow: hidden;
        text-overflow: ellipsis;
        /*toto je dobugovane neviem preco */
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        line-height: 1.5;
        max-height: calc(5em * 4);
        /*box-shadow: 0px 10px 10px grey;*/
        /*margin-top: 2%;*/
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
        width: 100%;
        height: 40px;
        
        .text-container {
            display: flex;
            align-items: center;
        }
        
        .img-container {
            width: 80px;
            height: 40px;    
        }
        
        .img-container img {
            height: 100%;
            width: 100%;
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

