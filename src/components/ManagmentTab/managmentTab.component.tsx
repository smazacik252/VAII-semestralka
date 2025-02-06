import {Tabs} from "@mui/material";
import React, {SyntheticEvent} from "react";
import {ItemTabContainer, TabStyled} from "../ItemTab/itemTab.styled.tsx";
import {UserList} from "../ListComponents/userList.component.tsx";
import {HeroesList} from "../ListComponents/heroesList.component.tsx";
import {ItemsList} from "../ListComponents/itemsList.component.tsx";
import {ArticlesList} from "../ListComponents/articleList.tsx";

export const ManagmentTab = () => {

    const [value, setValue] = React.useState<number>(0);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return(
        <ItemTabContainer>
            <Tabs value={value} onChange={handleChange} sx={{"& .MuiTabs-indicator": {backgroundColor: "transparent"}}}>
                <TabStyled label="Pouzivatelia"/>
                <TabStyled label="Clanky"/>
                <TabStyled label="Predmety"/>
                <TabStyled label="Hrdinovia"/>
            </Tabs>
            {value === 0 && <UserList/>}
            {value === 1 && <ArticlesList/>}
            {value === 2 && <ItemsList/>}
            {value === 3 && <HeroesList/>}
        </ItemTabContainer>
    );
}