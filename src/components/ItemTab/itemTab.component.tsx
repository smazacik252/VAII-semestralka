import {SyntheticEvent, useEffect, useState } from "react";
import {Tabs, Tooltip} from "@mui/material";
import {
    ItemCard,
    ItemsContainer,
    ItemTabContainer,
    TabStyled
} from "./itemTab.styled.tsx";

type Item = {
    name: string;
    description: string;
    price: string;
    tag?: string;
};

export const ItemTab = () => {
    const [value, setValue] = useState<number>(0);

    const [weaponItems, setWeaponItems] = useState<Item[]>([]);
    const [vitalityItems, setVitalityItems] = useState<Item[]>([]);
    const [spiritItems, setSpiritItems] = useState<Item[]>([]);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        let type = "";
        switch (value) {
            case 0:
                type = "weapon";
                break;
            case 1:
                type = "vitality";
                break;
            case 2:
                type = "spirit";
                break;
        }

        const fetchItems = async () => {
            try {
                const res = await fetch(`http://localhost:8000/items/type/${type}`);
                if (!res.ok) throw new Error(`Nepodarilo sa nacitat predmety typu:${type}`);
                const data = await res.json();

                if (type === "weapon") setWeaponItems(data);
                if (type === "vitality") setVitalityItems(data);
                if (type === "spirit") setSpiritItems(data);

            } catch (err) {
                console.error(err);
            }
        };

        fetchItems();
    }, [value]);

    const renderItems = (items: Item[]) => (
        <ItemsContainer>
            {items.map((item, index) => (
                <Tooltip
                    key={index}
                    title={`${item.description}\nCena: ${item.price}`}

                >
                    <ItemCard>
                        <div className="name">{item.name}</div>
                        {item.tag && <div className="tag">{item.tag}</div>}
                    </ItemCard>
                </Tooltip>
            ))}
        </ItemsContainer>
    );

    return (
        <ItemTabContainer>
            <h1>Predmety</h1>
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{ "& .MuiTabs-indicator": { backgroundColor: "transparent" } }}
            >
                <TabStyled label="Weapon" sx={{ "&.Mui-selected": { backgroundColor: "#EC981A" } }} />
                <TabStyled label="Vitality" sx={{ "&.Mui-selected": { backgroundColor: "#7CBB1E" } }} />
                <TabStyled label="Spirit" sx={{ "&.Mui-selected": { backgroundColor: "#CE91FF" } }} />
            </Tabs>

            {value === 0 && renderItems(weaponItems)}
            {value === 1 && renderItems(vitalityItems)}
            {value === 2 && renderItems(spiritItems)}
        </ItemTabContainer>
    );
};
