import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RegisterForm} from "./components/RegisterForm/registerForm.components.tsx";
import {UserList} from "./components/UserList/userList.component.tsx";
import {LoginForm} from "./components/LoginForm/loginForm.component.tsx";
import {useState} from "react";
import {HeroGrid} from "./components/HeroGrid/heroGrid.component.tsx";
import {HeroView} from "./components/HeroView/heroView.component.tsx";
import {ItemTab} from "./components/ItemTab/itemTab.component.tsx";
import {Layout} from "./components/Layout/laoyout.component.tsx";
import {LatestArticles} from "./components/LatestArticles/latestArticles.component.tsx";

function App() {
    const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem("user") || "null"));
    return (
        <Router>
            <Routes>
                <Route element={<Layout user={user} setUser={setUser} />}>
                    <Route path="/" element={<LatestArticles />} />
                    <Route path="/prihlasenie" element={<LoginForm />} />
                    <Route path="/registracia" element={<RegisterForm />} />
                    <Route path="/pouzivatelia" element={<UserList user={user} setUser={setUser} />} />
                    <Route path="/predmety" element={<ItemTab />} />
                    <Route path="/hrdinovia" element={<HeroGrid />} />
                    <Route path="/hrdinovia/:name" element={<HeroView />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App
