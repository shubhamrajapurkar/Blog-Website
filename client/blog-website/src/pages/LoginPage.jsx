import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[redirect,setRedirect]=useState(false);
    const {setUserInfo}= useContext(UserContext); 

    async function login(event){
        event.preventDefault();
        const response=await fetch('http://localhost:3000/login',{
            method:'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        });
        if(response.ok){
            response.json().then(userInfo=>{
                setUserInfo(userInfo);
                setRedirect(true);
            })
            
            // alert('Login is succesfull');
        }
        else{
            alert('login failed');
        }

    }
    if(redirect){
        return <Navigate to={'/'}/>
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>LOGIN</h1>
            <div className="username">
                <label for="username" >Username</label>
                <input type="text" 
                        id="username"  
                        name="username" 
                        required
                        value={username}
                        onChange={e=>{setUsername(e.target.value)}}/>
            </div>
            <div className="pasword">
                <label for="password">Password</label>
                <input name="password" 
                        type="password"  
                        id="password" 
                        required
                        value={password}
                        onChange={e=>{setPassword(e.target.value)}}/>
            </div>
            <button class="btn btn-dark">Login</button>
        </form>
    );
}