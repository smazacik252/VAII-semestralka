import {StyledRightPanel} from "./rightPanel.styled.tsx";
import {Section} from "../Section/section.component.tsx";

export const RightPanel = () => {
    return(
        <StyledRightPanel>
            <Section title = "Najviac prezerane"></Section>
            <Section title="Posledne prispevky"></Section>
        </StyledRightPanel>
    );
}