import React from "react";
import addfriends from "../images/add-friends.png"
import delivery from "../images/request-pickup.png"
import myactivity from "../images/my-activity.png"
import Template from "./Template";

export default function Landing() {

    return (
        <>
            <Template />
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
        </>
    )
}