import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveShippingAddress } from "../action/cartAction";
import { addOrder } from "../action/orderAction";

import CheckNav from "../navigation-bar/check-nav";

export default function OrderConfirm() {

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;



    const dispatch = useDispatch();

    const orderAdd = useSelector((state) => state.orderAdd);
    const { loading, error, order, success } = orderAdd;

    useEffect(() => {
        if (success) {
            window.location.href = `/order/${order._id}`;
            dispatch({ type: 'ORDER_RESET' });
        } else {
           
        }
    }, [success, cart, order]);




    const formSubmit = (e) => {
        dispatch(
            addOrder(
                { 
                    orderItems: cart.cartItems, 
                    shippingAddress: cart.shippingAddress,
                    totalPrice: cart.totalPrice
                 }
            )
        );
    }



    return (
        <div className="row pt-5 ">
            <div className="col-4">

                <CheckNav step1 step2 step3 />
            </div>

            <div className="col-8 pe-5" >
                <div className="list-group">
                    <div className="list-group-item">
                        {error && <div className="alert alert-danger">{error}</div>}
                    </div>
                    <div className="list-group-item">
                        <h2>Order Confirmation</h2>
                    </div>
                    <div className="list-group-item">
                        <h4>Shipping Address</h4>
                        <p>
                            {shippingAddress.street}, {shippingAddress.city},
                            {shippingAddress.state}, {shippingAddress.zipcode}
                        </p>
                    </div>

                    <div className="list-group-item">
                        <h4>Order Items</h4>
                        {cart.cartItems.length === 0 ? (
                            <div>Cart is empty</div>
                        ) : (
                            <ul className="list-group">
                                {cart.cartItems.map((item) => (
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col-2">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="col-6">
                                                <Link to={`/coffee/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </div>
                                            <div className="col-4">
                                                {item.qty} x ${item.price} = ${item.qty * item.price}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="list-group-item">
                        <h4>Order Summary</h4>
                        <p>
                            Total: ${cart.cartItems.reduce((a, c) => a + 3.99 * c.qty, 0)}
                        </p>
                    </div>
                    <div className="list-group-item">
                        <button
                            type="button"
                            disabled={cart.cartItems.length === 0}
                            className="btn btn-primary"
                            onClick={formSubmit}
                        >Check Out</button>
                    </div>
                </div>


            </div>
        </div>
    )
}