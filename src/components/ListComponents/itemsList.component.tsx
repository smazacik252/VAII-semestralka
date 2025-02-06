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
import {StyledTableContainer, ActionBox, DeleteButton, EditButton,} from './userList.styled.tsx';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.tsx";

type Item = {
    id: number;
    type: string;
    name: string;
    price: number;
    description: string;
};

export const ItemsList = () => {
    const [items, setHeroes] = useState<Item[]>([]);
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
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:8000/items');
                if (!response.ok) {
                    throw new Error('Nepodarilo sa nacitat predmety');
                }
                const data = await response.json();
                setHeroes(data);
            } catch (err: any) {
                setError(err.message);
            }
        };
        fetchItems();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/items/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Nepodarilo sa odstranit predmet');
            }
            setHeroes((prev) => prev.filter((item) => item.id !== id));
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
                        onClick={() => navigate("/sprava/predmet/novy")}
                    >
                        Pridať nový predmet
                    </Button>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><strong>ID</strong></TableCell>
                            <TableCell align="center"><strong>Meno</strong></TableCell>
                            <TableCell align="center"><strong>Typ</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell align="center">{item.id}</TableCell>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.type}</TableCell>
                                <TableCell align="center">
                                    <ActionBox>
                                        <EditButton
                                            variant="contained"
                                            onClick={() => navigate(`/sprava/predmet/upravit/${item.id}`)}
                                        >
                                            Upraviť
                                        </EditButton>
                                        <DeleteButton
                                            variant="contained"
                                            onClick={() => handleDelete(item.id)}
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
