import {HeroViewStyled} from "./heroView.styled.tsx";
import {StatCard} from "../StatCard/statCard.component.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Alert, CircularProgress} from "@mui/material";

type Hero = {
    id: string;
    name: string;
    render: string;
    info: string;
    lore: string;
    statsWeapon: {
        [key: string]: number;
    };

    statsVitality: {
        [key: string]: number;
    };
}

export const HeroView = () => {

    const {name} = useParams<{ name : string }>();
    const [hero, setHero] = useState<Hero | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await fetch(`http://localhost:8000/heroes/${name}`);
                if (!response.ok) throw new Error("Nepodarilo sa nacitat hrdinu");
                const data = await response.json();
                setHero(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHero();
    }, [name])

    if (loading) return <CircularProgress/>;
    if (error) return <Alert severity="error">Chyba:{error}</Alert>
    if (!hero) return <Alert severity="error">Hrdina nenajdeny</Alert>

    return (
        <HeroViewStyled>
            <div className = "container">
                <div className="up-container">
                    <div className="left-container">
                        <h1>{hero.name}</h1>
                        <p> {hero.info}</p>
                        <div className="stats-container">
                            <div className="stat-container">
                                <div className="stat-name">
                                    <h2>Weapon</h2>
                                </div>
                                <div className="cards-container">
                                    {Object.entries(hero.statsWeapon).map(([statName, value]) => (
                                        <StatCard key={statName} statName={statName} statValue={value} />
                                    ))}
                                </div>
                            </div>
                            <div className="stat-container">
                                <div className="stat-name">
                                    <h2>Vitality</h2>
                                </div>
                                <div className="cards-container">
                                    {Object.entries(hero.statsVitality).map(([statName, value]) => (
                                        <StatCard key={statName} statName={statName} statValue={value} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <img src={hero.render}/>
                    </div>
                </div>
                <div className="lower-container">
                    <h1>Lore</h1>
                    <p>{hero.lore}</p>
                </div>
            </div>

        </HeroViewStyled>
    );
}