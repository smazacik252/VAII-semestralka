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

type Hero = {
    id: number;
    name: string;
};

export const HeroesList = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
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
        const fetchHeroes = async () => {
            try {
                const response = await fetch('http://localhost:8000/heroes');
                if (!response.ok) {
                    throw new Error('Nepodarilo sa nacitat hrdinov');
                }
                const data = await response.json();
                setHeroes(data);
            } catch (err: any) {
                setError(err.message);
            }
        };
        fetchHeroes();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/heroes/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Nepodarilo sa odstranit hrdinu');
            }
            setHeroes((prev) => prev.filter((hero) => hero.id !== id));
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
                        onClick={() => navigate("/sprava/hrdina/novy")}
                    >
                        Pridať nového hrdinu
                    </Button>
                </div>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><strong>ID</strong></TableCell>
                            <TableCell align="center"><strong>Meno</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {heroes.map((hero) => (
                            <TableRow key={hero.id}>
                                <TableCell align="center">{hero.id}</TableCell>
                                <TableCell align="center">{hero.name}</TableCell>
                                <TableCell align="center">
                                    <ActionBox>
                                        <EditButton
                                            variant="contained"
                                            onClick={() => navigate(`/sprava/upravit/hrdina/${hero.id}`)}
                                        >
                                            Upraviť
                                        </EditButton>
                                        <DeleteButton
                                            variant="contained"
                                            onClick={() => handleDelete(hero.id)}
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
