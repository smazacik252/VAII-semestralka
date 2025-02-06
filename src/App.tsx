import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RegisterForm} from "./components/FormComponents/registerForm.components.tsx";
import {LoginForm} from "./components/FormComponents/loginForm.component.tsx";
import {HeroGrid} from "./components/HeroGrid/heroGrid.component.tsx";
import {HeroView} from "./components/ViewComponents/heroView.component.tsx";
import {ItemTab} from "./components/ItemTab/itemTab.component.tsx";
import {Layout} from "./components/LayoutComponents/laoyout.component.tsx";
import {LatestArticles} from "./components/LatestArticles/latestArticles.component.tsx";
import {ManagmentTab} from "./components/ManagmentTab/managmentTab.component.tsx";
import {HeroForm} from "./components/FormComponents/heroForm.component.tsx";
import {ItemForm} from "./components/FormComponents/itemForm.component.tsx";
import {ArticleForm} from "./components/FormComponents/articleForm.component.tsx";
import {ArticleView} from "./components/ViewComponents/articleView.component.tsx";
import {AllArticles} from "./components/AllArticles/allArticles.component.tsx";


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
                    <Route path="/sprava/predmet/novy/" element={<ItemForm />} />
                    <Route path="/sprava/predmet/upravit/:id" element={<ItemForm />} />
                    <Route path="/sprava/clanky/novy/" element={<ArticleForm/>} />
                    <Route path="/sprava/clanky/upravit/:id" element={<ArticleForm />} />
                    <Route path="/clanky/:id" element={<ArticleView/>} />
                    <Route path="/clanky/" element={<AllArticles/>} />
                    <Route path="/predmety" element={<ItemTab />} />
                    <Route path="/hrdinovia" element={<HeroGrid />} />
                    <Route path="/hrdinovia/:name" element={<HeroView />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App
