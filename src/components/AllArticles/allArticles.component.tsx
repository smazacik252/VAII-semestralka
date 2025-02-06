import React, { useEffect, useState } from "react";
import { ArticleCard } from "../CardComponents/articleCard.component.tsx";
import { dateFormat } from "../../utils/dateFormat.ts";
import { LatestArticlesStyled, PaginationStyled } from "../LatestArticles/latestArticles.styled.tsx";
import { Box } from "@mui/material";

type Article = {
    id: number;
    title: string;
    createdAt: Date;
    imagePath: string;
    summary: string;
};

export const AllArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 3;

    useEffect(() => {
        const fetchLatestArticles = async () => {
            try {
                const response = await fetch("http://localhost:8000/articles/");
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

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <LatestArticlesStyled>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {articles.length === 0 && !error ? <p>Loading...</p> : null}

            {currentArticles.map((article) => (
                <ArticleCard
                    key={article.id}
                    id={article.id.toString()}
                    title={article.title}
                    date={dateFormat(article.createdAt)}
                    image={article.imagePath}
                    description={article.summary}
                />
            ))}

            {articles.length > articlesPerPage && (
                <Box display="flex" justifyContent="center" marginTop={4}>
                    <PaginationStyled
                        count={Math.ceil(articles.length / articlesPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </Box>
            )}
        </LatestArticlesStyled>
    );
};
