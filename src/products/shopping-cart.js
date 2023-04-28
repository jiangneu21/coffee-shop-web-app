import React from "react";
import { useEffect } from "react";
import { addCart, removeCart } from "../action/cartAction";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

export default function Cart({ location }) {
    const dispatch = useDispatch();
    const { id } = useParams();

    const qty = location?.search ? Number(location.search.split('=')[1]) : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;  
    
    useEffect(() => {
        if (id) {
            dispatch(addCart(id, qty));
        }

    }, [dispatch, id, qty]);
console.log(qty);
    const backToMenu = () => {
        window.location.href = "/";
    }
  
    const checkoutHandler = () => {
        window.location.href = "/login?redirect=shipping";
        

    }

    return (
        <div>
            <style>{`
                body {
                    background-color: #1e3932;
                    color: white;
                }
            `}</style>
            <div className="container pt-3">
                <button className="btn btn-outline-light" onClick={backToMenu}>Back to menu</button>
                <br />
                <br />
                <h3>Review Order</h3>
                <div className="row" >
                    <div className="col-8">


                        <ul className="list-group">

                            {cartItems.length === 0 ? <p>Cart is empty</p> : cartItems.map((item) => (
                                <li key={item.product} className="list-group-item ">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="p-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 rounded-circle" src={item.image}
                                                style={{ height: '100px', width: '100px' }} />
                                        </div>
                                        <div className="col-3">
                                            <br />
                                            <Link to={`coffee/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div className="col-2">
                                            <br />
                                            <p>${item.price}</p>
                                        </div>
                                        <div className="col-2">
                                            <br />
                                            <input 
                                                style={{ width: "50px" }}
                                                type="number"
                                                // min="1"
                                                // step="1"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addCart(item.product, Number(e.target.value)))}
                                               
                                             /> 
                                        </div>
                                        <div className="col-2 position-relative">
                                            <button className="btn btn-warning position-absolute top-0 end-0 p-1 pb-0 pt-0 me-1"
                                            onClick={() => dispatch(removeCart(item.product))}>x</button>
                                        </div>
                                    </div>


                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body text-center" style={{ color: 'black' }}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h5>Order Summary ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h5>
                                    </li>
                                    <li className="list-group-item">
                                        <p>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <button className="btn btn-success" onClick={checkoutHandler}>Checkout</button>
                                    </li>
                                </ul>
                                

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>



    )
}