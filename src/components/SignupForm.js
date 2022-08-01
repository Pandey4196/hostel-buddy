import React, { useState } from "react";
import Template from "./Template";
import { Link } from "react-router-dom";

export default function SignupForm() {

    return (
        <>
            <Template />
            <div className="signup-bg-box">
                <h3 className="signup-header">SIGNUP</h3>
                <div className="input-box-1">
                <input  placeholder="Name" type="text" className="input-box-2" name="name" id="name" />
                </div>
                <div className="input-box-1">
                <input placeholder="Username" type="text" className="input-box-2" name="username" id="username" />
                </div>
                <div className="input-box-1">
                <input placeholder="Reg. No" type="text" className="input-box-2" name="regno" id="regno" />
                </div>
                <div className="input-box-1">
                <input placeholder="Hostel Block" type="text" className="input-box-2" name="hostel block" id="hostel-block" />
                </div>
                <div className="input-box-1">
                <input placeholder="Email" type="email" className="input-box-2" name="email-id" id="email-id" />
                </div>
                <div className="input-box-1">
                <input placeholder="Moblie" type="text" className="input-box-2" name="phone-number" id="phone-number"  />
                </div>
                <div className="input-box-1">
                <input placeholder="Password" type="password" className="input-box-2" name="password" id="password" />
                </div>
                <div>
                <button type="button" className="submit-button-signup" id="submit">SUBMIT</button>
                </div>
                </div>
        </>
    )
}
