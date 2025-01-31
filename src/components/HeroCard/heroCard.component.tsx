import {HeroCardStyled} from "./heroCard.styled.tsx";

type HeroCardProps = {
    id: string;
    name: string;
    image: string;
    description?: string;
};

export const HeroCard:  React.FC<HeroCardProps> = ({name, image}) => {
    return (
        <HeroCardStyled>
            <div className="hero-portrait">
                <img src={image} alt={name}/>
            </div>
            <h3>{name}</h3>
        </HeroCardStyled>
    );
};