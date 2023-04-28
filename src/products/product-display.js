import useFetch from './fetch-api';
import Product from './product';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listProducts } from '../action/productAction';

function ProductDisplay() {
    //const productsJson = useFetch('http://localhost:4000/coffee/hot');
    //const products = JSON.parse(productsJson);

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container">

            <div className="row">
                {products.map((product) => (
                    <div key={product._id}
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Product product={product} id={product.id}/>
                    </div>))}
            </div>
        </div>
    );
}
export default ProductDisplay;