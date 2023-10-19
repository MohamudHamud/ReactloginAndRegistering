import React, {useState} from "react";
import './App.css';
import {Login} from './login';
import {Registation} from "./registration";

function App() {
  const [currentForm, setcurrentForm] = useState('Login');
   const toggleForm = (formName)=>{
    setcurrentForm(formName);
   }

  return (
    <div className="App">{
      currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> :<Registation onFormSwitch={toggleForm}/>
      
    }
    </div>
  );
}

export default App;
