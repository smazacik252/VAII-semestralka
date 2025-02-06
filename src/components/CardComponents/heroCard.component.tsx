import React from "react";
import {HeroCardStyled} from "./card.styled.tsx";
import {Link} from "react-router-dom";

type HeroCardProps = {
    id: string;
    name: string;
    image: string;
    description?: string;
};

export const HeroCard:  React.FC<HeroCardProps> = ({name, image}) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    return (
        <Link to={`/hrdinovia/${formattedName}`} style={{ textDecoration: "none" }}>
            <HeroCardStyled>
                <div className="hero-portrait">
                    <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
            </HeroCardStyled>
        </Link>
    );
};