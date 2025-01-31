import {StyledLeftPanel} from "./leftPanel.styled.tsx";
import {ArticleCard} from "../ArticleCard/articleCard.component.tsx";

export const LeftPanel = () => {
  return (
      <StyledLeftPanel>
          <ArticleCard
          title = "test"
          date = "31.1.2025"
          image = "../img/temp-article-img.jpg"
          description = "Lorem impsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <ArticleCard
              title = "test2"
              date = "31.1.2025"
              image = "../img/temp-article-img.jpg"
              description = "Lorem impsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <ArticleCard
              title = "test3"
              date = "31.1.2025"
              image = "../img/temp-article-img.jpg"
              description = "Lorem impsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor"
          />
      </StyledLeftPanel>
  );
}