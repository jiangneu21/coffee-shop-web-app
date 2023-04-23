import React from "react";
import {Container, Table, Col, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import products from "../data/products";
// import useFetch from "../products/fetch-api";
import {Link} from "react-router-dom";

function ProductsListScreen () {
    // const productsJson = useFetch('http://localhost:4000/coffee/hot');
    // const products = JSON.parse(productsJson);

    if (!products) {
        return <p>Loading...</p>;
    }

    // const createNewProduct = useSelector((state) => state.createNewProduct)
    // const dispatch = useDispatch();
    // const createNewProductHandler = () => {
    //     dispatch(createNewProduct())
    // }
    return (
        <Container className="py-5">
            <Link to="/admin" className="btn btn-light">Back</Link>
            <h1 className="pb-5">Products</h1>
            <Button onClick='{}'>Create New Product</Button>
            <Table striped bordered responsive>
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Ingredients</th>
                        <th>Description</th>
                        <th>image</th>
                        <th>Price</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                <tr key={product.id}>
                    <td><Col xs={2}>{product.id}</Col></td>
                    <td><Col xs={2}>{product.title}</Col></td>
                    <td><Col xs={2}>{product.ingredients.join(', ')}</Col></td>
                    <td><Col xs={6}>{product.description}</Col></td>
                    <td><Col xs={1}><img src={product.image} width="100px" height="100px" alt=''/></Col></td>
                    <td><Col xs={2}>$ {product.price}</Col></td>
                    <td>
                        <div className="d-inline-flex">
                    <Link to={`/admin/products/${product.id}/edit`}>
                        <button className="btn btn-success">Edit</button>
                    </Link>
                        <button className="btn btn-warning">Delete</button>
                        </div>
                    </td>
                </tr>))
                }
                </tbody>
                </Table>
        </Container>
    );
}
export default ProductsListScreen;