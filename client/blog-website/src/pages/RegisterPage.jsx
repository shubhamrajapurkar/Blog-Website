import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function RegisterPage(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[redirect,setRedirect]=useState(false);
    async function resgister(event){
        event.preventDefault();
    
        const response=await fetch('http://localhost:3000/register',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        })
        if(response.status===200){
            alert("registeration successful");
            setRedirect(true);
        }
        else{
            alert("username already registered");
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }
    return(
        <form className="register" onSubmit={resgister}>
            <h1>REGISTER</h1>
            <div className="username">
                <label for="username" >Username</label>
                <input type="text" 
                       id="username"  
                       name="username" 
                       required 
                       value={username} 
                       onChange={e=> setUsername(e.target.value)}/>
            </div>
            <div className="pasword">
                <label for="password">Password</label>
                <input name="password" 
                       type="password"  
                       id="password" 
                       required
                       value={password}
                       onChange={e=>setPassword(e.target.value)}
                       />
            </div>
            <button >Register</button>
        </form>
    );
}