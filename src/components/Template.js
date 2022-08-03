import React from "react";
import {Link} from "react-router-dom";


export default function Template() {
 
    return (
        <>

            <div className="sidebar">
               
           </div>
            <div className="topnav">
            <div className="left-nav">
            <p id="hostel-buddy-template-header">
            <h1 className="header1">Hostel</h1>
            <h1 className="header2">Buddy</h1>
            </p>
            </div>
 
            <div>
                <a className="home-header">Home</a>
                <a className="about-header">About us</a>
                <a className="orders-header">Orders</a>
            </div>
            </div>
 
        </>
    )
}
