import React, { useState } from "react";
import Template from "./Template";
import { Link } from "react-router-dom";

export default function OrderDetails() {

    return (
        <>
            <Template />
            <div className="signup-bg-box">
                <h3 className="order-details-header">ORDER DETAILS</h3>
                <div className="input-box-1">
                <input  placeholder="Product Name" type="text" className="input-box-2" name="name" id="name" />
                </div>
                <div className="input-box-1">
                <input placeholder="Pickup Location" type="text" className="input-box-2" name="username" id="username" />
                </div>
                <div className="input-box-1">
                <input placeholder="Hostel Block" type="text" className="input-box-2" name="regno" id="regno" />
                </div>
                <div className="input-box-1">
                <input placeholder="Email" type="text" className="input-box-2" name="hostel block" id="hostel-block" />
                </div>
                <div>
                <button type="button" className="submit-button-signup" id="submit">SUBMIT</button>
                </div>
                </div>
        </>
    )
}
