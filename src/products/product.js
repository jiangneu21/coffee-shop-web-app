import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Product({ product }) {
    return (
        <>
            <Card style={{ width: '18rem', height: '95%', border:'none'}} 
            className="pt-3">
            
                <Card.Img
                    className='mx-auto d-block'
                    style={{ height: '70%', width: '80%', objectFit: 'cover' }}
                    src={product.image}
                />
                <Card.Body style={{ height: '8rem' }}>
                    <Link to={`/product/${product.id}`}>
                        {/* <Card.Text as='h5' className='text-center text-primary'>{product.category}</Card.Text> */}
                        <Card.Title className='text-center '>{product.title}</Card.Title>
                        {/* <Card.Text as='div' className='text-center text-primary'>{product.ingredients}</Card.Text>   */}
                    </Link>
                    {/* <Link to="#" className="btn btn-primary">Add to Cart</Link> */}
                </Card.Body>
            </Card>
        </>
    );
}

export default Product;