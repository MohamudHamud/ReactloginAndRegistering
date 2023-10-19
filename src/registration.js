import { useState } from "react"
import './App.css';
export  const Registation = (props) =>{
    const [Email, setEmial]=useState(''); 
    const [Pass, setPass]=useState(''); 
    const [FullName, setFullName]=useState(''); 
    const handlesubmit=(e)=>{
        e.preventdefault()
        console.log(Email);

    }
    const handlePasswordChange = (e) => {
        setPass(e.target.value); 
      };
    return(
        <div className="author-form">
        <form className="register-form" onSubmit={handlesubmit}>
        <label htmlFor="FullName">Full Name : </label>
            <input  value={FullName} type="text" placeholder="FullName " name="FullName" id="FullName" onChange={(e) => setFullName(e.target.value)}/>
            <label htmlFor="Email">Email : </label>
            <input  value={Email} type="text" placeholder="Ya*****@gmail.com" name="Email" id="Email" onChange={(e) => setEmial(e.target.value)}/>
            <label htmlFor="Password">Password : </label>
            <input value={Pass} type="Password" placeholder="*********" name="Password" id="Password" onChange={handlePasswordChange}/>
            <button type="submit">Register</button>
    
        </form>
        <button className="btn1" onClick={()=>props.onFormSwitch('Login')}> have Account ? Login Here</button>
        </div>
    )
}