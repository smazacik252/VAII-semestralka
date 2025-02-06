import {NavbarContainer, NavbarItem, NavbarLink, NavbarList} from "../../Header/navbar.styled.tsx";

export const Navbar = () => {
    return (
        <NavbarContainer >
            <NavbarList>
                <NavbarItem>
                    <NavbarLink to="/">Domov</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/clanky">Články</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/predmety">Predmety</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/hrdinovia">Hrdinovia</NavbarLink>
                </NavbarItem>
            </NavbarList>
        </NavbarContainer>
    );
}
