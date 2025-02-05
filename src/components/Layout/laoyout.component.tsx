import { Outlet } from "react-router-dom";
import {Header} from "../Header/header.compontent.tsx";
import {ContentContainer, LayoutStyled, LeftContainer, RightContainer} from "./layout.styled.tsx";
import {Section} from "../Section/section.component.tsx";


export const Layout = () => {
    return (
        <LayoutStyled>
            <Header/>
            <ContentContainer>
                <LeftContainer>
                    <Outlet />
                </LeftContainer>
                <RightContainer>
                    <Section title = "Najviac prezerane"></Section>
                    <Section title="Posledne prispevky"></Section>
                </RightContainer>
            </ContentContainer>
            <footer>
                All images, characters, and assets used on this website belong to Valve Corporation. They are used here solely for educational purposes and non-commercial use.
            </footer>
        </LayoutStyled>
    );
};
