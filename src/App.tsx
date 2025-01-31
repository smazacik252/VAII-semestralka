import './App.css'
import {RegisterForm} from "./components/RegisterForm/registerForm.components.tsx";
import {Header} from "./components/Header/header.compontent.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UserList} from "./components/UserList/userList.component.tsx";
import {LoginForm} from "./components/LoginForm/loginForm.component.tsx";
import {useState} from "react";
import {MainComponent} from "./components/MainContent/mainContent.component.tsx";
import {HeroCard} from "./components/HeroCard/heroCard.component.tsx";

function App() {
    const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem("user") || "null"));
  return (
    <>
        <Router>
            <Header user={user} setUser={setUser}/>
                <Routes>
                    <Route path = "/"/>
                    <Route path = "/prihlasenie" element ={<LoginForm/>}/>
                    <Route path = "/registracia" element ={<RegisterForm/>}/>
                    <Route path="/pouzivatelia" element={<UserList user={user} setUser={setUser} />} />
                 </Routes>
            <MainComponent></MainComponent>
            <HeroCard
                id="1"
                name="Abrams"
                image="../img/heroes/Abrams_card.png"
            ></HeroCard>
            <footer>All images, characters, and assets used on this website belong to Valve Corporation. They are used here solely for educational purposes and non-commercial use. </footer>
        </Router>
    </>
  );
}

export default App
