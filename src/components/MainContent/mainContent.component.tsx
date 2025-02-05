import {LatestArticles} from "../LatestArticles/latestArticles.component.tsx";
import {StyledMainContainer} from "./mainContent.styled.tsx";
import {Highlights} from "../Highlights/highlights.component.tsx";

export const MainComponent = () => {
    return (
        <>
            <StyledMainContainer>
                <LatestArticles/>
                <Highlights/>
            </StyledMainContainer>
        </>

    );
}