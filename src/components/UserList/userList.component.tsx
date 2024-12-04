import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import {
    StyledTableContainer,
    ActionBox,
    SaveButton,
    CancelButton,
    EditButton,
    DeleteButton,
    HeaderTypography,
} from '../Styles/userList.styled.tsx';

type User = {
    id: number;
    userName: string;
    email: string;
};

export const UserList = ({ user: loggedInUser, setUser }: { user: User; setUser: (user: User | null) => void }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [editingData, setEditingData] = useState<Partial<User>>({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8000/users');
                if (!response.ok) {
                    throw new Error('Nepodarilo sa nacitat pouzivatelov');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchUsers();
    }, []);

    const handleEditStart = (user: User) => {
        setEditingUserId(user.id);
        setEditingData({ userName: user.userName, email: user.email });
    };

    const handleEditCancel = () => {
        setEditingUserId(null);
        setEditingData({});
    };

    const handleEditSave = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/users/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editingData),
            });

            if (!response.ok) {
                throw new Error('Nepodarilo sa aktualizovat pouzivatela');
            }

            const updatedUser = await response.json();
            setUsers((prevUsers) => prevUsers.map((user) => (user.id === id ? updatedUser : user)));

            if (loggedInUser.id === id) {
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setUser(updatedUser);
            }

            setEditingUserId(null);
            setEditingData({});
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/users/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Nepodarilo sa odstranit pouzivatela');
            }

            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

            if (loggedInUser.id === id) {
                localStorage.removeItem("user");
                setUser(null);
                navigate("/prihlasenie");
            }
        } catch (err: any) {
            setError(err.message);
        }
    };

    const isEditable = (id: number) => loggedInUser && loggedInUser.id === id;

    return (
        <StyledTableContainer>
            <Paper>
                <HeaderTypography variant="h5">Pouzivatelia</HeaderTypography>
                {error && (
                    <Typography color="error" align="center">
                        {error}
                    </Typography>
                )}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><strong>ID</strong></TableCell>
                            <TableCell align="center"><strong>Používateľské Meno</strong></TableCell>
                            <TableCell align="center"><strong>Email</strong></TableCell>
                            <TableCell align="center"><strong>Akcie</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell align="center">{user.id}</TableCell>
                                <TableCell align="center">
                                    {editingUserId === user.id ? (
                                        <TextField
                                            value={editingData.userName || ""}
                                            onChange={(e) =>
                                                setEditingData((prev) => ({
                                                    ...prev,
                                                    userName: e.target.value,
                                                }))
                                            }
                                            size="small"
                                        />
                                    ) : (
                                        user.userName
                                    )}
                                </TableCell>
                                <TableCell align="center">
                                    {editingUserId === user.id ? (
                                        <TextField
                                            value={editingData.email || ""}
                                            onChange={(e) =>
                                                setEditingData((prev) => ({
                                                    ...prev,
                                                    email: e.target.value,
                                                }))
                                            }
                                            size="small"
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </TableCell>
                                <TableCell align="center">
                                    <ActionBox>
                                        {isEditable(user.id) && editingUserId === user.id ? (
                                            <>
                                                <SaveButton
                                                    variant="contained"
                                                    onClick={() => handleEditSave(user.id)}
                                                >
                                                    Ulozit
                                                </SaveButton>
                                                <CancelButton
                                                    variant="contained"
                                                    onClick={handleEditCancel}
                                                >
                                                    Zrusit
                                                </CancelButton>
                                            </>
                                        ) : (
                                            isEditable(user.id) && (
                                                <>
                                                    <EditButton
                                                        variant="contained"
                                                        onClick={() => handleEditStart(user)}
                                                    >
                                                        Upravit
                                                    </EditButton>
                                                    <DeleteButton
                                                        variant="contained"
                                                        onClick={() => handleDelete(user.id)}
                                                    >
                                                        Vymazat
                                                    </DeleteButton>
                                                </>
                                            )
                                        )}
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
