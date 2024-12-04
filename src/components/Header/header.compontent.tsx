import {Link, useNavigate} from "react-router-dom";
import {HeaderButton, HeaderContainer} from "../Styles/header.styled.tsx";
import {useEffect, useState} from "react";


export const Header = () =>{

    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    }

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
                        <HeaderButton><Link to ="/pouzivatelia">Zobrazit pouzivatelov</Link></HeaderButton>
                        <HeaderButton onClick={handleLogout}>Odhlasit</HeaderButton>
                    </>

                ) : (
                    <>
                        <HeaderButton><Link to={"/prihlasenie"}>Prihlasenie</Link></HeaderButton>
                        <HeaderButton><Link to={"/registracia"}>Registracia </Link></HeaderButton>
                    </>
                )}
            </HeaderContainer>
        </header>
    )
}