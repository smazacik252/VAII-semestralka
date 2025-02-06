import { styled } from "@mui/material/styles";
import { CardStyled } from "../CardComponents/card.styled.tsx";

export const ArticleContainer = styled(CardStyled)`
    max-width: 900px;
    margin: 0 auto;
    flex-direction: column;
    padding: 15px;
`;

export const PictureContainer = styled("div")`
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Header = styled("div")`
    margin-bottom: 20px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2rem;
    }
`;

export const TextContainer = styled("div")`
    font-size: 1.2rem;
    line-height: 1.6;

    p {
        margin-bottom: 10px;
    }
`;

export const CommentsContainer = styled("div")`
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #ccc;
    color: #F5E4C1;
`;

export const CommentItem = styled("div")`
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    color: #F5E4C1;
    
    p {
        margin: 0;
    }

    small {
        color: #666;
    }
`;
