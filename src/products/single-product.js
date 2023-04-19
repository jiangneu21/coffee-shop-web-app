import React, { useEffect } from "react";
import useFetch from "./fetch-api";
import { useParams, useHistory, useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts } from "../action/productAction";

export default function SingleProduct() {
    //console.log(id);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const productDetail = useSelector((state) => state.productDetail);
    const { loading, products } = productDetail;

    useEffect(() => {
        dispatch(detailProducts(id));
    }, [dispatch, id]);

    const addToCartHandler = () => {
        navigate(`/cart/${id}`, { replace: true })
    }
    // const { id } = useParams();
    // const productData = useFetch(`http://localhost:4000/coffee/hot/${id}`);
    // const products = JSON.parse(productData);
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="row" style={{ backgroundColor: ' #1e3932', height: '40%' }}>
                <div className="col-6">
                    <img className="p-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 rounded-circle" src={products.image}
                        style={{ height: '300px', width: '300px', float: 'right', marginRight: '40px' }} />
                </div>
                <div className="col-6 p-4 mt-3" style={{ width: '30%' }}>
                    <h1 className="text-center text-light font-weight-bold pb-2">{products.title}</h1>
                    <p className=" text-light">{products.description}</p>
                </div>
            </div>
            <div className="container pt-4" style={{ height: '60%' }}>
                <div className="row">
                    <div className="col-6">
                        <h1 className="text-center font-weight-bold pb-2">Ingredients</h1>
                        <p className="">{products.ingredients}</p>
                    </div>
                    <div className="col-6 ">
                        <Card>
                            <Card.Header>Check Out</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col">
                                            Price:
                                        </div>
                                        <div className="col">
                                            $3.99
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col">
                                            Total:
                                        </div>
                                        <div className="col">
                                            $3.99
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="text-center">
                                    <Button variant="outline-success"
                                    onClick={addToCartHandler}>Add to Cart</Button>
                                </ ListGroup.Item>
                            </ListGroup>
                        </Card>

                    </div>
                    {/* <div className="col-4">
                        <h1 className="text-center font-weight-bold pb-2">Reviews</h1>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="text-center font-weight-bold pb-2">Reviews</h1>
                    </div>
                </div>
            </div>
        </div>


    );
}