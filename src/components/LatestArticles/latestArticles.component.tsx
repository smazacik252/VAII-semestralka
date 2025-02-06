import { useEffect, useState } from "react";
import { LatestArticlesStyled } from "./latestArticles.styled.tsx";
import { ArticleCard } from "../CardComponents/articleCard.component.tsx";
import {dateFormat} from "../../utils/dateFormat.ts";

type Article = {
    id: number;
    title: string;
    createdAt: Date;
    imagePath: string;
    summary: string;
};

export const LatestArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLatestArticles = async () => {
            try {
                const response = await fetch("http://localhost:8000/articles/latest");
                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const data = await response.json();
                setArticles(data);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchLatestArticles();
    }, []);

    return (
        <LatestArticlesStyled>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {articles.length === 0 && !error ? <p>Loading...</p> : null}

            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    id={article.id.toString()}
                    title={article.title}
                    date={dateFormat(article.createdAt)}
                    image={article.imagePath}
                    description={article.summary}
                />
            ))}
        </LatestArticlesStyled>
    );
};
