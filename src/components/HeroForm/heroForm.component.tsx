import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Typography, Paper } from '@mui/material';

type Hero = {
    id: number;
    name: string;
    portrait: string;
    render: string;
    info: string;
    lore: string;
};

export function HeroForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [heroData, setHeroData] = useState<Hero>({
        id: 0,
        name: "",
        portrait: "",
        render: "",
        info: "",
        lore: ""
    });
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (id) {

            const fetchHero = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/heroes/${id}`);
                    if (!response.ok) {
                        throw new Error('Nepodarilo sa nacitat hrdinu');
                    }
                    const data = await response.json();
                    setHeroData(data);
                } catch (err: any) {
                    setError(err.message);
                }
            };
            fetchHero();
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (id) {
                const response = await fetch(`http://localhost:8000/heroes/${id}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(heroData),
                });
                if (!response.ok) {
                    throw new Error('Nepodarilo sa aktualizovat hrdinu');
                }
            } else {
                const response = await fetch(`http://localhost:8000/heroes`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(heroData),
                });
                if (!response.ok) {
                    throw new Error('Nepodarilo sa vytvoriť hrdinu');
                }
            }
            navigate("/sprava");
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeroData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Paper style={{ padding: 24 }}>
            <Typography variant="h6">
                {id ? "Upraviť hrdinu" : "Pridať nového hrdinu"}
            </Typography>

            {error && (
                <Typography color="error" align="center">
                    {error}
                </Typography>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                    label="Meno"
                    name="name"
                    value={heroData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Portrét (URL alebo cesta)"
                    name="portrait"
                    value={heroData.portrait}
                    onChange={handleChange}
                />
                <TextField
                    label="Render (URL alebo cesta)"
                    name="render"
                    value={heroData.render}
                    onChange={handleChange}
                />
                <TextField
                    label="Info"
                    name="info"
                    value={heroData.info}
                    onChange={handleChange}
                />
                <TextField
                    label="Lore"
                    name="lore"
                    value={heroData.lore}
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
