import React, { useState } from "react";
import Template from "./Template";
import { Link } from "react-router-dom";

export default function OrderDetails() {

    return (
        <>
            <Template />
            <div className="signup-bg-box">
                <h3 className="order-details-header">ORDER DETAILS</h3>
                <div className="input-box-3">
                <input  placeholder="Product Name" type="text" className="input-box-2" id="prdctname" />
                </div>
                <div className="input-box-3">
                <input  placeholder="Payment Status" type="text" className="input-box-2"  id="payment" />
                </div> 
                <div className="input-box-3">
                <input placeholder="Pickup Location" type="text" className="input-box-2"  id="location" />
                </div>
                <div className="input-box-3">
                <input placeholder="Hostel Block" type="text" className="input-box-2"  id="hostel-block" />
                </div>
                <div className="input-box-3">
                <input placeholder="Email" type="text" className="input-box-2"  id="email" />
                </div>
                <div className="input-box-3">
                <input placeholder="Contact Details" type="text" className="input-box-2"  id="contact" />
                </div>
                <div>
                <button type="button" className="submit-button-signup" id="submit">SUBMIT</button>
                </div>
                </div>
        </>
    )
}
