import {ArticleCard} from "../ArticleCard/articleCard.component.tsx";
import {StyledSection} from "./section.styled.tsx";

type SectionProps = {
    title: string;
};

export const Section: React.FC<SectionProps> = ({ title }) => {
    return (
        <StyledSection>
            <div className="section-header">
                <h3>{title}</h3>
            </div>
            <ArticleCard
                className="section-card"
                title="test"
                image="../img/temp-article-img.jpg"
                headingLevel="h3"
            />
            <ArticleCard
                className="section-card"
                title="test2"
                image="../img/temp-article-img.jpg"
                headingLevel="h3"
            />
            <ArticleCard
                className="section-card"
                title="test3"
                image="../img/temp-article-img.jpg"
                headingLevel="h3"
            />
        </StyledSection>
)
    ;
};
