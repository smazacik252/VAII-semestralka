import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {TextField, Button, Typography, Paper} from '@mui/material';
import {RootState} from "../../store/store.tsx";
import {useSelector} from "react-redux";

type Article = {
    id: number;
    author: string;
    createdAt?: Date;
    title: string;
    summary: "";
    text: string;
    imagePath: string;
};

export function ArticleForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const authorUserName = useSelector((state: RootState) => state.user.userName);

    const [articleData, setArticleData] = useState<Article>({
        id: 0,
        author: authorUserName,
        createdAt: undefined,
        title: "",
        summary: "",
        text: "",
        imagePath: "",
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchArticle = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/articles/${id}`);
                    if (!response.ok) {
                        throw new Error('Nepodarilo sa načítať clanok');
                    }
                    const data = await response.json();
                    setArticleData(data);
                } catch (err: any) {
                    setError(err.message);
                }
            };
            fetchArticle();
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (id) {
                const response = await fetch(`http://localhost:8000/articles/${id}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(articleData),
                });
                if (!response.ok) {
                    throw new Error('Nepodarilo sa aktualizovať clanok');
                }
            } else {
                const response = await fetch(`http://localhost:8000/articles`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(articleData),
                });
                if (!response.ok) {
                    throw new Error('Nepodarilo sa vytvoriť clanok');
                }
            }
            navigate("/sprava");
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
            setArticleData(prev => ({...prev, [name]: value}));
    };

    return (
        <Paper style={{ padding: 24 }}>
            <Typography variant="h6" gutterBottom>
                {id ? "Upraviť clanok" : "Pridať novy clanok"}
            </Typography>
            {error && (
                <Typography color="error" align="center" style={{ marginBottom: "1rem" }}>
                    {error}
                </Typography>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                    label="Titulok"
                    name="title"
                    value={articleData.title}
                    onChange={handleChange}
                    required
                />

                <TextField
                    label="Zhrnutie"
                    name="summary"
                    value={articleData.summary}
                    onChange={handleChange}
                    multiline
                    minRows={2}
                    required
                />

                <TextField
                    label="Cesta k obrazku"
                    name="imagePath"
                    value={articleData.imagePath}
                    onChange={handleChange}
                    required
                />

                <TextField
                    label="Text"
                    name="text"
                    value={articleData.text}
                    onChange={handleChange}
                    multiline
                    minRows={6}
                    required
                />

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button type="submit" variant="contained">
                        {id ? "Uložiť" : "Vytvoriť"}
                    </Button>
                    <Button variant="outlined" onClick={() => navigate("/sprava")}>
                        Zrušiť
                    </Button>
                </div>
            </form>
        </Paper>
    );
}
