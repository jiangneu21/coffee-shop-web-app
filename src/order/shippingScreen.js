import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveShippingAddress } from "../action/cartAction";


export default function Shipping() {

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;


    const [street, setStreet] = useState(shippingAddress.street);
    const [city, setCity] = useState(shippingAddress.city);
    const [state, setState] = useState(shippingAddress.state);
    const [zipcode, setZipcode] = useState(shippingAddress.zipcode);
    
   const dispatch = useDispatch();


    const formSubmit = (e) => {
        console.log('formSubmit?');
        e.preventDefault();
        dispatch(saveShippingAddress({ street, city, state, zipcode }));
        console.log('formSubmit');
        console.log(street, city, state, zipcode);
        window.location.href = "/payment";
    }



    return (
            <div className="container pt-5" style={{ width: '50%' }}>
            {/* {error && <div className="alert alert-danger">{error}</div>}
            {loading && <div className="text-center"/>}
            {message && <div className="alert alert-danger">{message}</div>} */}

            <form onSubmit={formSubmit} >
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        className="form-control"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)} />
                    <label className="form-label">Street</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="text"
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    <label className="form-label">City</label>
                </div>


                <div className="form-outline mb-4">
                    <input
                        className="form-control"
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)} />
                    <label className="form-label">State</label>
                </div>
                <div className="form-outline mb-4">
                    <input
                        className="form-control"
                        type="text"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)} />
                    <label className="form-label">Zipcode</label>
                </div>

                <div className="text-center ">
                    <button type="submit" className="btn btn-primary mb-4">Save address</button>
                </div>



                
            </form></div>
    )
}