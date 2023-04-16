import useFetch from './fetch-api';
import Product from './product';

function ProductDisplay() {
    const productsJson = useFetch('http://localhost:4000/coffee/hot');
    const products = JSON.parse(productsJson);
    if (!products) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container">

            <div className="row">
                {products.map((product) => (
                    <div key={product.id}
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Product product={product} />
                    </div>))}
            </div>
        </div>
    );
}
export default ProductDisplay;