import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, CircularProgress, TextField, Button } from "@mui/material";
import {dateFormat} from "../../utils/dateFormat.ts";
import {
    ArticleContainer,
    CommentItem,
    CommentsContainer,
    Header,
    PictureContainer,
    TextContainer
} from "./articleView.styled.ts";

type Article = {
    id: number;
    title: string;
    createdAt: string;
    text: string;
    imagePath: string;
};

type Comment = {
    id: number;
    content: string;
    createdAt: string;
};

export const ArticleView = () => {
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [newComment, setNewComment] = useState("");
    const [posting, setPosting] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:8000/articles/${id}`);
                if (!response.ok) {
                    throw new Error("Nepodarilo sa načítať článok");
                }
                const data = await response.json();
                setArticle(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:8000/articles/${id}/comments`);
                if (!response.ok) {
                    throw new Error("Nepodarilo sa načítať komentáre");
                }
                const data = await response.json();
                setComments(data);
            } catch (err: any) {
                console.error("Chyba pri načítaní komentárov:", err);
            }
        };
        if (id) {
            fetchArticle();
            fetchComments();
        }
    }, [id]);

    const handleCommentSubmit = async () => {
        if (!newComment.trim()) return;

        setPosting(true);
        try {
            const response = await fetch(`http://localhost:8000/comments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: newComment, articleId: id }),
            });

            if (!response.ok) {
                throw new Error("Nepodarilo sa pridať komentár");
            }

            const newCommentData = await response.json();
            setComments([...comments, newCommentData]);
            setNewComment("");
        } catch (err: any) {
            console.error("Chyba pri pridávaní komentára:", err);
        } finally {
            setPosting(false);
        }
    };

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;
    if (!article) return <Alert severity="warning">Článok neexistuje</Alert>;

    return (
        <ArticleContainer>
            <PictureContainer>
                <img
                    src={article.imagePath || "../img/temp-article-img.jpg"}
                    alt="article image"
                />
            </PictureContainer>
            <Header>
                <h1>{article.title}</h1>
                <p>
                    {dateFormat(article.createdAt)}
                </p>
            </Header>
            <TextContainer>
                {article.text.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </TextContainer>

            <CommentsContainer>
                <h2>Komentáre</h2>
                {comments.length === 0 ? (
                    <Alert severity="info">Zatiaľ žiadne komentáre</Alert>
                ) : (
                    comments.map((comment) => (
                        <CommentItem key={comment.id}>
                            <p>{comment.content}</p>
                            <small>
                                {dateFormat(comment.createdAt)}
                            </small>
                        </CommentItem>
                    ))
                )}

                <TextField
                    fullWidth
                    label="Napíšte komentár..."
                    multiline
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCommentSubmit}
                    disabled={posting}
                >
                    Pridať komentár
                </Button>
            </CommentsContainer>
        </ArticleContainer>
    );
};
