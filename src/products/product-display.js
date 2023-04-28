import useFetch from './fetch-api';
import Product from './product';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listProducts } from '../action/productAction';
import { useLocation } from 'react-router-dom';

function ProductDisplay() {
    //const productsJson = useFetch('http://localhost:4000/coffee/hot');
    //const products = JSON.parse(productsJson);
    //const keyword = match.params.keyword;
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;
    
    const location = useLocation();
    console.log('location');
    //console.log(window);

    console.log(location);
    console.log('location');
    //const keyword = location.search.split('=')[1];
    const keyword = location.pathname.split('/')[2];
    console.log(keyword);

    useEffect(() => {
        dispatch(listProducts(keyword));
    }, [dispatch, keyword]);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (

        <div className="container">
        {keyword ? <h4 className='pt-3'>Search Results</h4> : <h4 className='pt-3'>Our Products</h4>}
            <div className="row">
                {products && products.map((product) => (
                    <div key={product._id}
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Product product={product} id={product.id}/>
                    </div>))}
            </div>
        </div>
    );
}
export default ProductDisplay;