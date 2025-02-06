import { Outlet } from "react-router-dom";
import {Header} from "../Header/header.compontent.tsx";
import {ContentContainer, LayoutStyled, LeftContainer, RightContainer} from "./layout.styled.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.tsx";
import {UserCard} from "../CardComponents/userCard.component.tsx";
import {LoginForm} from "../FormComponents/loginForm.component.tsx";

export const Layout = () => {

    const isLoggedIn = useSelector((state: RootState) => state.user.loggedIn);

    return (
        <LayoutStyled>
            <Header/>
            <ContentContainer>
                <LeftContainer>
                    <Outlet />
                </LeftContainer>
                <RightContainer>
                    <div className="user-card-container">
                        {isLoggedIn ? <UserCard/> : <LoginForm/>}
                    </div>
                </RightContainer>
            </ContentContainer>
            <footer>
                All images, characters, and assets used on this website belong to Valve Corporation. They are used here solely for educational purposes and non-commercial use.
            </footer>
        </LayoutStyled>
    );
};
