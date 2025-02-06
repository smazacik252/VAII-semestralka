import { StyledHeader } from "./header.styled.tsx";
import {Navbar} from "../LayoutComponents/Navbar/navbar.component.tsx";



export const Header =  ()  => {

    return (
        <StyledHeader>
            <div className="upper-container">
                <div className="logo-container">
                    <img src="../img/header.png" alt="logo"/>
                </div>
            </div>
            <Navbar/>
        </StyledHeader>
    );
};
