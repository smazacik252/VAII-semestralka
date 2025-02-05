import { StyledHeader } from "../Styles/header.styled.tsx";
import {Navbar} from "../Navbar/navbar.component.tsx";
import {UserCard} from "../UserCard/userCard.component.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.tsx";

export const Header =  ()  => {

    const isLoggedIn = useSelector((state: RootState) => state.user.loggedIn);

    return (
        <StyledHeader>
            <div className="upper-container">
                <div className="logo-container">
                    <img src="../img/header.png" alt="logo"/>
                </div>
                <div className="user-card-container">
                    {isLoggedIn ? <UserCard/> : <></>}
                </div>
            </div>
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
        </StyledHeader>
    );
};
