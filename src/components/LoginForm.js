import React from "react";
import Template from "./Template";
export default function LoginForm(){
    
    return(
        <>
            <Template />
            <div className="login-bg-box">
                <h3 className="login-header">LOGIN</h3>
                <form className="username-form"> USERNAME </form>
                <div className="under-line-1"></div> 
                <form className="password-form"> Password </form>
                <div className="under-line-2"></div>
                
            </div>

        </>
    )
}
