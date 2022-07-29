import React from "react";
import { useState } from "react";
import addfriends from "./add-friends.png"
import delivery from "./request-pickup.png"
import myactivity from "./my-activity.png"

export default function Landing() {

    return (
        <>
            <div className="sidebar">
                
           </div>
            <div className="topnav">
            <div className="left-nav">
            <a>
            <h1 className="header1">Hostel</h1>
            <h1 className="header2">Buddy</h1>
            </a>
            </div>

            <div>
                <a className="home-header">Home</a>
                <a className="about-header">About us</a>
                <a className="orders-header">Orders</a>
            </div>

            <div className="button-div-addF">
                <img src={addfriends} className="adding-friends-image"/>            
                <p className="button-text">Add Friends</p>
            </div>
            <div className="button-div-requestPickup">
                <img src={delivery} className="request-pickup-image"/>             
                <p className="button-text-two">Request Order Pickup</p>
            </div>
            <div className="button-div-checkActivity">
                <img src={myactivity} className="activity-image"/>           
                <p className="button-text-three">My Activity</p>
            </div>


            </div>

        </>
    )
}