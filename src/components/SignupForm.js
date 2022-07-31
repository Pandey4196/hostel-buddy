import React, {useState} from "react";
import Template from "./Template";


export default function SignupForm(){
    
    return(
        <>
            <Template />
            <div className="signup-bg-box">
            <h3 className="signup=header">SIGNUP</h3>
            <label htmlFor="name">
            <input placeholder="NAME" type="text" className="" name="name" id="NAME" />
            </label>

            <label htmlFor="username">
            <input placeholder="USERNAME" type="text" className="" name="username" id="USERNAME" />
            </label>
            
            <label htmlFor="hostel block">    
            <input placeholder="HOSTEL BLOCK" type="text" className="" name="hostel block" id="HOSTEL-BLOCK" />
            </label>

            <label htmlFor="email">
            <input placeholder="EMAIL" type="email" className="" name="email-id" id="EMAIL-ID" />
            </label>

            <label htmlFor="mobile number">    
            <input placeholder="MOBILE NUMBER" type="text" className="" name="phone-number" id="PHONE-NUMBER" />
            </label>

            <label htmlFor="password">
            <input placeholder="PASSWORD" type="password" className="" name="password" id="PASSWORD" />
            </label>

            <button>SUBMIT</button>
            </div>
        </>
    )
}
