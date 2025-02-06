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
    dps: number;
    bulletDamage: number;
    ammo: number;
    bulletsPerSec: number;
    reloadTime: number;
    bulletVelocity: number;
    lightMelee: number;
    heavyMelee: number;
    falloffRange: number;
    health: number;
    healthRegen: number;
    moveSpeed: number;
    stamina: number;
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
        lore: "",
        dps: 0,
        bulletDamage: 0,
        ammo: 0,
        bulletsPerSec: 0,
        reloadTime: 0,
        bulletVelocity: 0,
        lightMelee: 0,
        heavyMelee: 0,
        falloffRange: 0,
        health: 0,
        healthRegen: 0,
        moveSpeed: 0,
        stamina: 0
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchHero = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/heroes/${id}`);
                    if (!response.ok) {
                        throw new Error('Nepodarilo sa načítať hrdinu');
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
                    throw new Error('Nepodarilo sa aktualizovať hrdinu');
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

    const numericFields = new Set([
        "dps",
        "bulletDamage",
        "ammo",
        "bulletsPerSec",
        "reloadTime",
        "bulletVelocity",
        "lightMelee",
        "heavyMelee",
        "falloffRange",
        "health",
        "healthRegen",
        "moveSpeed",
        "stamina"
    ]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (numericFields.has(name)) {
            setHeroData(prev => ({
                ...prev,
                [name]: parseFloat(value) || 0
            }));
        } else {
            setHeroData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    return (
        <Paper style={{ padding: 24 }}>
            <Typography variant="h6" gutterBottom>
                {id ? "Upraviť hrdinu" : "Pridať nového hrdinu"}
            </Typography>

            {error && (
                <Typography color="error" align="center" style={{ marginBottom: "1rem" }}>
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
                    label="Portrét (cesta k súboru)"
                    name="portrait"
                    value={heroData.portrait}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Render (cesta k súboru)"
                    name="render"
                    value={heroData.render}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Info"
                    name="info"
                    value={heroData.info}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Lore"
                    name="lore"
                    value={heroData.lore}
                    onChange={handleChange}
                    required
                />
                <Typography variant="subtitle1"><strong>Weapon Stats</strong></Typography>
                <TextField
                    label="DPS"
                    name="dps"
                    type="number"
                    value={heroData.dps}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Bullet Damage"
                    name="bulletDamage"
                    type="number"
                    value={heroData.bulletDamage}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Ammo"
                    name="ammo"
                    type="number"
                    value={heroData.ammo}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Bullets Per Sec"
                    name="bulletsPerSec"
                    type="number"
                    value={heroData.bulletsPerSec}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Reload Time"
                    name="reloadTime"
                    type="number"
                    value={heroData.reloadTime}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Bullet Velocity"
                    name="bulletVelocity"
                    type="number"
                    value={heroData.bulletVelocity}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Light Melee"
                    name="lightMelee"
                    type="number"
                    value={heroData.lightMelee}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Heavy Melee"
                    name="heavyMelee"
                    type="number"
                    value={heroData.heavyMelee}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Falloff Range"
                    name="falloffRange"
                    type="number"
                    value={heroData.falloffRange}
                    onChange={handleChange}
                    required
                />
                <Typography variant="subtitle1"><strong>Vitality Stats</strong></Typography>
                <TextField
                    label="Health"
                    name="health"
                    type="number"
                    value={heroData.health}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Health Regen"
                    name="healthRegen"
                    type="number"
                    value={heroData.healthRegen}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Move Speed"
                    name="moveSpeed"
                    type="number"
                    value={heroData.moveSpeed}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Stamina"
                    name="stamina"
                    type="number"
                    value={heroData.stamina}
                    onChange={handleChange}
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
