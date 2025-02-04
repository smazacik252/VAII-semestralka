import {HeroViewStyled} from "./heroView.styled.tsx";
import {StatCard} from "../StatCard/statCard.component.tsx";

export const HeroView = () => {
    return (
        <HeroViewStyled>
            <div className = "container">
                <div className="up-container">
                    <div className="left-container">
                        <h1>Abrams</h1>
                        <p> Abrams has the bulk and sustain to lead from the front, often running into the middle of
                            his
                            foes and watching them scatter. If his enemies waste their fire on him, his backline
                            teammates can lay out damage with impunity.</p>
                        <div className="stats-container">
                            <div className="stat-container">
                                <div className="stat-name">
                                    <h2>Weapon</h2>
                                </div>
                                <div className="cards-container">
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>

                                </div>
                            </div>
                            <div className="stat-container">
                                <div className="stat-name">
                                    <h2>Vitality</h2>
                                </div>
                                <div className="cards-container">
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                    <StatCard></StatCard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <img src="../../../img/Abrams_Render.png"/>
                    </div>
                </div>
                <div className="lower-container">
                    <h1>Lore</h1>
                    <p>Hard hitting, hard headed, and hard drinking; Detective Abrams has been a fixture on the New York investigating scene for years. From stolen art, to missing persons, to ritual murders; Abrams didn't just take any case that came across his desk... he solved them.
                        But his days of following cheating spouses came to an end the day he opened his office door and found The Tome sitting on his desk.
                        No instruction was left for him save for a brief note scrawled in onyx blood that read "Don't let them have it". Abrams hasn't figured out where the thing came from; but seeing as his home has been broken into, his office tossed on 3 different occasions, and his car firebombed he has a vested interest in figuring out what the hell is going on.
                    </p>
                </div>
            </div>

        </HeroViewStyled>
    );
}