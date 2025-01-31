import {ArticleCardLink, ArticleCardStyled} from "./articleCard.styled.tsx";

type ArticleCardProps = {
    id: string;
    title: string;
    date?: string;
    image: string;
    description?: string;
    className?: string;
    headingLevel?: keyof JSX.IntrinsicElements;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, date, image, description, className, headingLevel = "h2" }) => {

    const Heading = headingLevel;

    return (
        <ArticleCardLink to={`/articles/${id}`}>
            <ArticleCardStyled className={className}>
                <div className="img-container">
                    <img src={image} alt={title}/>
                </div>
                <div className="text-container">
                    <Heading>{date} {title}</Heading>
                    <p>{description}</p>
                </div>
            </ArticleCardStyled>
        </ArticleCardLink>
    );
};
