import {HeroGridStyled} from "./heroGrid.styled.tsx";
import {HeroCard} from "../HeroCard/heroCard.component.tsx";

type Hero = {
    id: string;
    name: string;
    image: string;
};

type HeroGridProps = {
    heroes: Hero[];
};

export const HeroGrid: React.FC<HeroGridProps> = ({heroes}) => {
    return(
        <HeroGridStyled>
            <h1>Hrdinovia</h1>
            {heroes.map((hero) => (
                <HeroCard
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    image={hero.image}
                />
            ))}
        </HeroGridStyled>
    );
}