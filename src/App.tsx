import './App.css'
import {RegisterForm} from "./components/RegisterForm/registerForm.components.tsx";
import {Header} from "./components/Header/header.compontent.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UserList} from "./components/UserList/userList.component.tsx";
import {LoginForm} from "./components/LoginForm/loginForm.component.tsx";

function App() {

  return (
    <>
        <Router>
            <Header/>
                <Routes>
                    <Route path = "/"/>
                    <Route path = "/prihlasenie" element ={<LoginForm/>}/>
                    <Route path = "/registracia" element ={<RegisterForm/>}/>
                    <Route path = "/pouzivatelia" element ={<UserList/>}/>
                 </Routes>
        </Router>
    </>
  );
}

export default App
