import './App.css'
import {RegisterForm} from "./components/RegisterForm/registerForm.components.tsx";
import {Header} from "./components/Header/header.compontent.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UserList} from "./components/UserList/userList.component.tsx";
import {LoginForm} from "./components/LoginForm/loginForm.component.tsx";
import {useState} from "react";

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
        </Router>
    </>
  );
}

export default App
