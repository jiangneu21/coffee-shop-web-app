import React from "react";
import {Link, useParams} from "react-router-dom";
import {Container, Form, Button, FormCheck} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import Products from "../data/products";
import useFetch from "../products/fetch-api";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import FormCheckInput from "react-bootstrap/FormCheckInput";

const ProductEditScreen = ({products}) => {

/*    const { id } = useParams();
    const productData = useFetch(`http://localhost:4000/coffee/hot/${id}`);
    const products = JSON.parse(productData);
    }*/
    const {id} = useParams();
    const product = Products.find(product => product.id === id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredient] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();

    if (!Products) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <Link to='/admin/products' className='btn btn-light my-3'>Back</Link>
            <Form>
                <Form.Group controlId='title' className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the product title"
                        value={product.title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='description' className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the description"
                        value={product.description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='ingredients' className="mb-3">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Check multiple>
                        <Form.Check label='Coffee'
                                    value={product.ingredients}
                                    checked={ingredients === product.ingredients}/>
                        <Form.Check label='Hot Water'
                                    value={product.ingredients}
                                    checked={ingredients === product.ingredients}/>
                        <Form.Check label='Espresso'
                                    value={product.ingredients}
                                    checked={ingredients === product.ingredients}/>
                        <Form.Check label='2oz Espresso'
                                    value={product.ingredients}
                                    checked={ingredients === product.ingredients}/>
                        <Form.Check label='Short pulled espresso'
                                    value={product.ingredients}
                                    checked={ingredients === product.ingredients}/>
                        <Form.Check label='Steamed Milk'
                                    value={product.ingredients}
                                    checked={ingredients === product.ingredients}/>
                        <Form.Check label='Chocolate'
                                    value={product.ingredients}
                                    checked={ingredients === product.ingredients}/>
                    </Form.Check>
                </Form.Group>
                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image url"
                        value={product.image}
                        onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter price"
                        value={product.price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">Update</Button>
            </Form>
        </Container>
)}
export default ProductEditScreen;