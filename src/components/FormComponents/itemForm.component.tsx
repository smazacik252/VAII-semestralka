import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Typography, Paper } from '@mui/material';

type Item = {
    id: number;
    type: string;
    name: string;
    price: number;
    description: string;
};

export function ItemForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [itemData, setItemData] = useState<Item>({
        id: 0,
        type: "",
        name: "",
        price: 0,
        description: "",
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchItem = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/items/${id}`);
                    if (!response.ok) {
                        throw new Error('Nepodarilo sa načítať predmet');
                    }
                    const data = await response.json();
                    setItemData(data);
                } catch (err: any) {
                    setError(err.message);
                }
            };
            fetchItem();
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (id) {
                const response = await fetch(`http://localhost:8000/items/${id}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(itemData),
                });
                if (!response.ok) {
                    throw new Error('Nepodarilo sa aktualizovať predmet');
                }
            } else {
                const response = await fetch(`http://localhost:8000/items`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(itemData),
                });
                if (!response.ok) {
                    throw new Error('Nepodarilo sa vytvoriť predmet');
                }
            }
            navigate("/sprava");
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        if (name === "price") {
            setItemData(prev => ({
                ...prev,
                price: parseFloat(value) || 0
            }));
        } else {
            setItemData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    return (
        <Paper style={{ padding: 24 }}>
            <Typography variant="h6" gutterBottom>
                {id ? "Upraviť predmet" : "Pridať nový predmet"}
            </Typography>

            {error && (
                <Typography color="error" align="center" style={{ marginBottom: "1rem" }}>
                    {error}
                </Typography>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                    label="Názov"
                    name="name"
                    value={itemData.name}
                    onChange={handleChange}
                    required
                />

                <TextField
                    label="Typ"
                    name="type"
                    value={itemData.type}
                    onChange={handleChange}
                />

                <TextField
                    label="Popis"
                    name="description"
                    value={itemData.description}
                    onChange={handleChange}
                />

                <TextField
                    label="Cena"
                    name="price"
                    type="number"
                    value={itemData.price}
                    onChange={handleChange}
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
