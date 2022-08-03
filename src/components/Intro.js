import React  from "react";
import logo from "../images/logo.png";
import { Link,  } from "react-router-dom";



export default function Intro() {
    return(
        <>
            <div className="main-solid">
            
            <nav> 
            <img src={logo} className="logo" />
                
            <Link to ='/login' >
            <button className="button-login">
                LOGIN
            </button>
            </Link>
            <Link to ='/signup' >
            <button className="button-signup" >
                SIGNUP
            </button>
            </Link>
            <h1 className="hostelbuddy-intro-header-1">
                Hostel
            </h1>
            <h1 className="hostelbuddy-intro-header-2">
                Buddy
            </h1>
            </nav>
            <div className="left-main-box">
                Reliable, Fast, Friendly.
            </div>

            <div className="right-main-box">
                <div className="box-1" >
                Add your friends with a friend recommendation system
                </div>
                <div className="box-2">
                Access their location using our live location access feature
                </div>
                <div className="box-3">
                Choose friend according to proximity or preference
                </div>
                <div className="box-4">
                Send pick-up Request
                </div>
            </div>

            </div>
        </>
    )
}