import React, {useEffect, useState} from "react";
import {HeroGridStyled} from "./heroGrid.styled.tsx";
import {HeroCard} from "../HeroCard/heroCard.component.tsx";
import {Alert, CircularProgress} from "@mui/material";

type Hero = {
    id: string;
    name: string;
    portrait: string;
};


export const HeroGrid: React.FC = () => {

    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await fetch('http://localhost:8000/heroes');
                if (!response.ok) throw new Error("Nepodarilo sa nacitat hrdinov");
                const data = await response.json();
                setHeroes(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHeroes();
    }, []);

    if (loading) return <CircularProgress/>;
    if (error) return <Alert severity="error">Chyba:{error}</Alert>

    return(
        <HeroGridStyled>
            <h1>Hrdinovia</h1>
            {heroes.map((hero) => (
                <HeroCard
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    image={hero.portrait}
                />
            ))}
        </HeroGridStyled>
    );
}