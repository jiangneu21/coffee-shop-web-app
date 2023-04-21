import Footer from "./footer/foot";
import NavigationBar from "./navigation-bar/nav";
import ProductDisplay from "./products/product-display";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./products/single-product";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
// import AdminScreen from "./screens/AdminScreen";

function App() {
  // const jsonData = useFetch('https://api.sampleapis.com/coffee/hot');
  return (
    <BrowserRouter>
      <NavigationBar />

        <Routes>
          <Route index element={<ProductDisplay />} />
          <Route path="/product/:id" element={<SingleProduct />}/>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            {/*<Route path="/admin" element={<AdminScreen />} />*/}
        </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
