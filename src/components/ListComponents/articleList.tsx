import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    Alert
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import {
    StyledTableContainer,
    ActionBox,
    DeleteButton,
    EditButton,
} from './userList.styled.tsx';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.tsx";
import {dateFormat} from "../../utils/dateFormat.ts";

type Article = {
    id: number;
    author: string;
    createdAt: string;
    title: string;
    summary: "";
    text: string;
    imagePath: string;
};

export const ArticlesList = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [countdown, setCountdown] = useState<number>(5);

    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.role !== "admin") {
            const intervalId = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalId);
                        navigate("/");
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [user, navigate]);

    if (!user || user.role !== "admin") {
        return (
            <Alert severity="warning">
                Neoprávnený prístup. Presmerovanie za {countdown} sekúnd.
            </Alert>
        );
    }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:8000/articles');
                if (!response.ok) {
                    throw new Error('Nepodarilo sa nacitat clanky');
                }
                const data = await response.json();
                setArticles(data);
            } catch (err: any) {
                setError(err.message);
            }
        };
        fetchArticles();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/articles/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Nepodarilo sa odstranit clanok');
            }
            setArticles((prev) => prev.filter((article) => article.id !== id));
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <StyledTableContainer>
            <Paper>
                {error && (
                    <Typography color="error" align="center">
                        {error}
                    </Typography>
                )}
                <div style={{ padding: 16 }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/sprava/clanky/novy")}
                    >
                        Pridať nový clanok
                    </Button>
                </div>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><strong>ID</strong></TableCell>
                            <TableCell align="center"><strong>Nazov</strong></TableCell>
                            <TableCell align="center"><strong>Autor</strong></TableCell>
                            <TableCell align="center"><strong>Vytvoreny</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articles.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell align="center">{article.id}</TableCell>
                                <TableCell align="center">{article.title}</TableCell>
                                <TableCell align="center">{article.author}</TableCell>
                                <TableCell align="center">{dateFormat(article.createdAt)}</TableCell>
                                <TableCell align="center">
                                    <ActionBox>
                                        <EditButton
                                            variant="contained"
                                            onClick={() => navigate(`/sprava/clanky/upravit/${article.id}`)}
                                        >
                                            Upraviť
                                        </EditButton>
                                        <DeleteButton
                                            variant="contained"
                                            onClick={() => handleDelete(article.id)}
                                        >
                                            Vymazať
                                        </DeleteButton>
                                    </ActionBox>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </StyledTableContainer>
    );
};
