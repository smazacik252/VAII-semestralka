import React from "react";
import {NavbarContainer, NavbarItem, NavbarLink, NavbarList} from "../Header/navbar.styled.tsx";

type NavbarProps = {
    isLoggedIn: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
    return (
        <NavbarContainer >
            <NavbarList>
                <NavbarItem>
                    <NavbarLink to="/">Domov</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/predmety">Predmety</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/hrdinovia">Hrdinovia</NavbarLink>
                </NavbarItem>
                {!isLoggedIn && (
                    <>
                        <NavbarItem>
                            <NavbarLink to="/prihlasenie">Prihlásenie sa</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/registracia">Registrovať sa</NavbarLink>
                        </NavbarItem>
                    </>
                )}
            </NavbarList>
        </NavbarContainer>
    );
}
