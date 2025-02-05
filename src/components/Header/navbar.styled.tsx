import {styled} from "@mui/material/styles";
import {Container} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";


export const NavbarContainer = styled(Container)`
    align-items: stretch;
    height: auto;
    margin-bottom: 10px;
    /*box-shadow: 0px 5px 15px black;*/
`

export const NavbarList = styled(List)`
    width: 100%;
    height: 100%;
    background-color: #417851;
    list-style-type: none;
    display:flex;
    flex: 1;
    justify-content: space-between;
    padding:0;
    margin:0;
    align-items: stretch;
`

export const NavbarItem = styled(ListItem)`
    text-align: center;
    height: 100%;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
`

export const NavbarLink = styled(Link)`
    width: 100%;
    height: 100%;
    padding: 15px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F5E4C1;
    &:hover {
        box-shadow: 0 5px 0 #F5E4C1;
        text-shadow: 2px 2px 2px black;
        background-color: rgba(245, 228, 193, 0.1);
    }
`;

