import {RightPanel} from "../RightPanel/rightPanel.component.tsx";
import {LeftPanel} from "../LeftPanel/leftPanel.component.tsx";
import {StyledMainContainer} from "./mainContent.styled.tsx";

export const MainComponent = () => {
    return (
        <>
            <StyledMainContainer>
                <LeftPanel></LeftPanel>
                <RightPanel></RightPanel>
            </StyledMainContainer>
        </>

    );
}