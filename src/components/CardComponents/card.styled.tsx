import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";
import {Link} from "react-router-dom";

export const CardStyled = styled(Card)`
    display:flex;
    background: rgba(0, 0, 0, 0.6);
    color:#F5E4C1;
    font-size: 1.1rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px black;
    flex: 1;
    width: 100%;
    `;

export const ArticleCardStyled = styled(CardStyled)`
    
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
    @media (max-width: 768px) {
        .img-container {
            flex-direction: column;
        }
    }
`;

export const HeroCardStyled = styled(CardStyled)`
    background-color: #a49784;
    width: 150px;
    height: 200px;
    flex-direction: column;
    margin: 0px 10px 10px 0px;
    position: relative;
    padding: 0!important;
    box-shadow: none;
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
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
`;

export const StatCardStyled = styled(CardStyled)`
    flex: 1 1 50%; 
    max-width: 50%; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    border-radius: 0;
    background-color: #2F2F2F;
    box-shadow: none;
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
`;

export const CardLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    &:hover {
        text-decoration: none; 
    }
`;

export const UserCardStyled = styled(CardStyled)`

    .img-container {
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
        flex: 1;
    }
    
`;

export const FormCardStyled = styled(CardStyled)`
    font-weight: bold;
    width: 100%;
    padding: 15px;
    border-radius: 8px;
`;

