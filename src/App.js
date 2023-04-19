import Footer from "./footer/foot";
import NavigationBar from "./navigation-bar/nav";
import ProductDisplay from "./products/product-display";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./products/single-product";
import Cart from "./products/shopping-cart";

function App() {
  // const jsonData = useFetch('https://api.sampleapis.com/coffee/hot');
  return (
    <BrowserRouter>
      <NavigationBar />
      {/* <div className="container"> */}

        <Routes>
          <Route index element={<ProductDisplay />} />
          <Route path="/coffee/:id" element={<SingleProduct />} />
          <Route path="/cart/:id?" element={<Cart />} />
        </Routes>
      
      {/* </div> */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
