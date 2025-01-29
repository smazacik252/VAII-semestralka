import {NavbarContainer, NavbarItem, NavbarLink, NavbarList} from "../Header/navbar.styled.tsx";

export const Navbar = () => {
    return (
        <NavbarContainer maxWidth={false}>
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
                <NavbarItem>
                    <NavbarLink to="/prihlasenie">Prihlásenie sa</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/registracia">Registrovať sa</NavbarLink>
                </NavbarItem>
            </NavbarList>
        </NavbarContainer>
    );
}
