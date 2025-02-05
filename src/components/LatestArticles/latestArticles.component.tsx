import {LatestArticlesStyled} from "./latestArticles.styled.tsx";
import {ArticleCard} from "../ArticleCard/articleCard.component.tsx";

export const LatestArticles = () => {
  return (
      <LatestArticlesStyled>
          <ArticleCard
              id= "1"
          title = "test"
          date = "31.1.2025"
          image = "../img/temp-article-img.jpg"
          description = "Lorem impsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <ArticleCard
              id= "2"
              title = "test2"
              date = "31.1.2025"
              image = "../img/temp-article-img.jpg"
              description = "Lorem impsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <ArticleCard
              id= "3"
              title = "test3"
              date = "31.1.2025"
              image = "../img/temp-article-img.jpg"
              description = "Lorem impsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor"
          />
      </LatestArticlesStyled>
  );
}