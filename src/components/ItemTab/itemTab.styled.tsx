import {styled} from "@mui/material/styles";
import {Container, Tab} from "@mui/material";

export const ItemTabContainer = styled(Container)`
    padding: 0!important;
    
    h1 {
        color:#ffefd7;
        flex-basis: 100%;
        width: 100%;
        font-weight: 900;
        text-shadow: 2px 2px black;
        margin: 0 0 15px 0;
        text-align: center;
    }

    & .MuiTabs-flexContainer {
        gap: 15px; 
    }
`

export const TabStyled = styled(Tab)`
    font-family: inherit;
    font-weight: bold;
    color:#F5E4C1;
    background: rgba(0, 0, 0, 0.6);
    font-size: 1.1rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px black;
    flex: 1;
    gap: 10px;

    &:hover {
        transform: scale(1.01);
        transition: transform 0.3s ease, color 0.3s ease, font-weight 0.3s ease;
    }
    
    &.Mui-selected {
        color: black;
        font-weight: bold;
        transform: scale(1.1);
        transition: transform 0.3s ease, color 0.3s ease, font-weight 0.3s ease;
    }
`

export const ItemsContainer = styled("div")`
    display: flex;
    flex-wrap: wrap;
    color: #F5E4C1;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 5px 0 0 0;
    border-radius: 8px;
`;

export const ItemCard = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 90px;
    background-color: #cbbda7;
    border-radius: 8px;
    padding: 8px;
    margin: 0 10px 0 0;
    
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease, color 0.3s ease, font-weight 0.3s ease;
    }
    
    .name {
        font-size: .7em;
        font-weight: bold;
        text-align: center;
        color: black;
    }
    
`;