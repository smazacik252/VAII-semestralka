import {Tabs} from "@mui/material";
import React, {SyntheticEvent} from "react";
import {ItemCard, ItemsContainer, ItemTabContainer, TabStyled} from "./itemTab.styled.tsx";

const weaponItems = [
    { name: "Basic Magazine" },
    { name: "Close Quarters" },
    { name: "Headshot Booster" },
    { name: "Fleetfoot" },
];

const vitalityItems = [
    { name: "Health Booster" },
    { name: "Shield Upgrade" },
    { name: "Regeneration Aura" },
];

const spiritItems = [
    { name: "Soul Harvest" },
    { name: "Mystic Shield" },
    { name: "Shadow Veil", },
];


export const ItemTab = () => {

    const [value, setValue] = React.useState<number>(0);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const renderItems = (items) => (
        <ItemsContainer>
            {items.map((item, index) => (
                <ItemCard key={index}>
                    <div className="name">{item.name}</div>
                    {item.tag && <div className="tag">{item.tag}</div>}
                </ItemCard>
            ))}
        </ItemsContainer>
    );

    return(
        <ItemTabContainer>
            <h1>Predmety</h1>
            <Tabs value={value} onChange={handleChange} sx={{"& .MuiTabs-indicator": {backgroundColor: "transparent"}}}>
                <TabStyled label="Weapon" sx={{"&.Mui-selected": {backgroundColor: "#EC981A"}}}/>
                <TabStyled label="Vitality" sx={{"&.Mui-selected": {backgroundColor: "#7CBB1E"}}}/>
                <TabStyled label="Spirit" sx={{"&.Mui-selected": {backgroundColor: "#CE91FF"}}}/>
            </Tabs>
            {value === 0 && renderItems(weaponItems)}
            {value === 1 && renderItems(vitalityItems)}
            {value === 2 && renderItems(spiritItems)}
        </ItemTabContainer>
    );
}