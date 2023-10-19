import React, {useState} from "react";
import './App.css';
import { Registation } from "./registration";
export  const  Login = (props)=>{
    const [Email, setEmial]=useState(''); 
    const [Pass, setPass]=useState(''); 
    const handlesubmit=(e)=>{
        e.preventdefault()
        console.log(Email);

    }
    const handlePasswordChange = (e) => {
        setPass(e.target.value); 
      };
    return(
    <div className="auth-form-container">
        <form className="login-form" onSubmit={handlesubmit}>
            <label htmlFor="Email">Email : </label>
            <input  value={Email} type="text" placeholder="Ya*****@gmail.com" name="Email" id="Email" onChange={(e) => setEmial(e.target.value)}/>
            <label htmlFor="Password">Password : </label>
            <input value={Pass} type="Password" placeholder="*********" name="Password" id="Password" onChange={handlePasswordChange}/>
            <button type="submit">Login</button>
    
        </form>
        <button className="btn1" onClick={() => props.onFormSwitch('Registration')}>On Click to Registration</button> 
        </div>
    )
   
}