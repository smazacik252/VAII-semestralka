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
            <Navbar></Navbar>
        </StyledHeader>
    );
};
