import { Link, useNavigate } from "react-router-dom";
import {HeaderButton, HeaderContainer, StyledHeader} from "../Styles/header.styled.tsx";
import {Navbar} from "../Navbar/navbar.component.tsx";

export const Header = ({ user, setUser }: { user: any; setUser: (user: any) => void }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <StyledHeader>
            <div className="logo-container">
                <img src="../img/header.png" alt="logo"/>
            </div>
            <Navbar></Navbar>
        </StyledHeader>
    );
};
