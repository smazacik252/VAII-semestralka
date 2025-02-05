import {UserCardStyled} from "./userCard.styled.tsx";
import {FormButton} from "../Styles/form.styled.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.tsx";
import {logout} from "../../store/userSlice.tsx";
import {useNavigate} from "react-router-dom";

export const UserCard = () => {

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <UserCardStyled>
            <div className="img-container">
                <img src="../../../img/heroes/Abrams_card.png"/>
            </div>
            <div className="user-info-container">
                <h1>{user.userName}</h1>
                <FormButton onClick={handleLogout}>Odhlasit</FormButton>
            </div>
        </UserCardStyled>
    );
}