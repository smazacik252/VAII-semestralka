import { Link, useNavigate } from "react-router-dom";
import { HeaderButton, HeaderContainer } from "../Styles/header.styled.tsx";

export const Header = ({ user, setUser }: { user: any; setUser: (user: any) => void }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <header>
            <HeaderContainer maxWidth={false}>
                {user ? (
                    <>
                        <span>
                            <div>[id]{user.id}</div>
                            <div>[meno]{user.userName}</div>
                            <div>[email]{user.email}</div>
                        </span>
                        <HeaderButton><Link to="/pouzivatelia">Zobrazit pouzivatelov</Link></HeaderButton>
                        <HeaderButton onClick={handleLogout}>Odhlasit</HeaderButton>
                    </>
                ) : (
                    <>
                        <HeaderButton><Link to="/prihlasenie">Prihlasenie</Link></HeaderButton>
                        <HeaderButton><Link to="/registracia">Registracia </Link></HeaderButton>
                    </>
                )}
            </HeaderContainer>
        </header>
    );
};
