import React from "react";
import {NavbarContainer, NavbarItem, NavbarLink, NavbarList} from "../Header/navbar.styled.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.tsx";

type NavbarProps = {
    isLoggedIn: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {

    const role = useSelector((state: RootState) => state.user.role);

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
                {isLoggedIn && role ==="admin" && (
                    <>
                        <NavbarItem>
                            <NavbarLink to="/pouzivatelia">Sprava pouzivatelov</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/clanky">Sprava clankov</NavbarLink>
                        </NavbarItem>
                    </>
                )}
            </NavbarList>
        </NavbarContainer>
    );
}
