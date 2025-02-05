import React from "react";
import {UserCardStyled} from "./userCard.styled.tsx";
import {FormButton} from "../Styles/form.styled.tsx";

type User = {
    userName: string;
}

type UserCardProps = {
    user: User;
    onLogout: () => void;
};

export const UserCard: React.FC<UserCardProps> = ({ user, onLogout }) => {

    return (
        <UserCardStyled>
            <div className="img-container">
                <img src="../../../img/heroes/Abrams_card.png"/>
            </div>
            <div className="user-info-container">
                <h1>{user.userName}</h1>
                <FormButton onClick={onLogout}>Odhlasit</FormButton>
            </div>
        </UserCardStyled>
    );
}