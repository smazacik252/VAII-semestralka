import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RegisterForm} from "./components/RegisterForm/registerForm.components.tsx";
import {LoginForm} from "./components/LoginForm/loginForm.component.tsx";
import {HeroGrid} from "./components/HeroGrid/heroGrid.component.tsx";
import {HeroView} from "./components/HeroView/heroView.component.tsx";
import {ItemTab} from "./components/ItemTab/itemTab.component.tsx";
import {Layout} from "./components/Layout/laoyout.component.tsx";
import {LatestArticles} from "./components/LatestArticles/latestArticles.component.tsx";
import {ManagmentTab} from "./components/ManagmentTab/managmentTab.component.tsx";
import {HeroForm} from "./components/HeroForm/heroForm.component.tsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<LatestArticles />} />
                    <Route path="/prihlasenie" element={<LoginForm />} />
                    <Route path="/registracia" element={<RegisterForm />} />
                    <Route path="/sprava" element={<ManagmentTab />} />
                    <Route path="/sprava/hrdina/novy" element={<HeroForm />} />
                    <Route path="/sprava/upravit/hrdina/:id" element={<HeroForm />} />
                    <Route path="/predmety" element={<ItemTab />} />
                    <Route path="/hrdinovia" element={<HeroGrid />} />
                    <Route path="/hrdinovia/:name" element={<HeroView />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App
