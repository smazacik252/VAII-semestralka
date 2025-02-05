import {Tabs} from "@mui/material";
import React, {SyntheticEvent} from "react";
import {ItemTabContainer, TabStyled} from "../ItemTab/itemTab.styled.tsx";
import {UserList} from "../UserList/userList.component.tsx";

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
                <TabStyled label="Obrazky"/>
            </Tabs>
            {value === 0 && <UserList/>}
            {value === 1 && <UserList/>}
            {value === 2 && <UserList/>}
            {value === 3 && <UserList/>}
            {value === 4 && <UserList/>}
        </ItemTabContainer>
    );
}