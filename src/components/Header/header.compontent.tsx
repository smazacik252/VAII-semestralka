import { StyledHeader } from "../Styles/header.styled.tsx";
import {Navbar} from "../Navbar/navbar.component.tsx";
import {UserCard} from "../UserCard/userCard.component.tsx";
import {useEffect, useState} from "react";

type User = {
    userName: string,
}

export const Header =  ()  => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <StyledHeader>
            <div className="upper-container">
                <div className="logo-container">
                    <img src="../img/header.png" alt="logo"/>
                </div>
                <div className="user-card-container">
                    {user ? <UserCard user={user} onLogout={handleLogout} /> : <></>}
                </div>
            </div>
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
        </StyledHeader>
    );
};
