import { HeroViewStyled } from "./heroView.styled.tsx";
import { StatCard } from "../CardComponents/statCard.component.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert, CircularProgress } from "@mui/material";

type Hero = {
    id: number;
    name: string;
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

export const HeroView = () => {
    const { name } = useParams<{ name: string }>();
    const [hero, setHero] = useState<Hero | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await fetch(`http://localhost:8000/heroes/by-name/${name}`);
                if (!response.ok) throw new Error("Nepodarilo sa načítať hrdinu");
                const data = await response.json();
                setHero(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHero();
    }, [name]);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">Chyba: {error}</Alert>;
    if (!hero) return <Alert severity="error">Hrdina nenájdený</Alert>;

    return (
        <HeroViewStyled>
            <div className="container">
                <div className="up-container">
                    <div className="left-container">
                        <h1>{hero.name}</h1>
                        <p>{hero.info}</p>
                        <div className="stats-container">
                            <div className="stat-container">
                                <div className="stat-name">
                                    <h2>Weapon Stats</h2>
                                </div>
                                <div className="cards-container">
                                    <StatCard statName="DPS" statValue={hero.dps} />
                                    <StatCard statName="Bullet Damage" statValue={hero.bulletDamage} />
                                    <StatCard statName="Ammo" statValue={hero.ammo} />
                                    <StatCard statName="Bullets/Sec" statValue={hero.bulletsPerSec} />
                                    <StatCard statName="Reload Time (s)" statValue={hero.reloadTime} />
                                    <StatCard statName="Bullet Velocity (m/s)" statValue={hero.bulletVelocity} />
                                    <StatCard statName="Light Melee" statValue={hero.lightMelee} />
                                    <StatCard statName="Heavy Melee" statValue={hero.heavyMelee} />
                                    <StatCard statName="Falloff Range" statValue={hero.falloffRange}
                                    />
                                </div>
                            </div>
                            <div className="stat-container">
                                <div className="stat-name">
                                    <h2>Vitality Stats</h2>
                                </div>
                                <div className="cards-container">
                                    <StatCard statName="Health" statValue={hero.health} />
                                    <StatCard statName="Health Regen" statValue={hero.healthRegen} />
                                    <StatCard statName="Move Speed (m/s)" statValue={hero.moveSpeed} />
                                    <StatCard statName="Stamina" statValue={hero.stamina} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <img src={hero.render} alt={hero.name} />
                    </div>
                </div>
                <div className="lower-container">
                    <h1>Lore</h1>
                    <p>{hero.lore}</p>
                </div>
            </div>
        </HeroViewStyled>
    );
};
