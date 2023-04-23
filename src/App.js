import Footer from "./footer/foot";
import NavigationBar from "./navigation-bar/nav";
import ProductDisplay from "./products/product-display";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./products/single-product";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import UsersListScreen from "./screens/UsersListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductsListScreen from "./screens/ProductsListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrdersListScreen from "./screens/OrdersListScreen";
import OrderEditScreen from "./screens/OrderEditScreen";
// import useFetch from "./products/fetch-api";


function App() {
  // const jsonData = useFetch('https://api.sampleapis.com/coffee/hot');
  return (
    <BrowserRouter>
      <NavigationBar />
        <Routes>
            <Route index element={<ProductDisplay />} />
            <Route path="/coffee/:id" element={<SingleProduct />}/>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/admin/users" element={<UsersListScreen />} />
            <Route path="/admin/users/:id/edit" element={<UserEditScreen />} />
            <Route path="/admin/orders" element={<OrdersListScreen />} />
            <Route path="/admin/orders/:id/edit" element={<OrderEditScreen />} />
            <Route path="/admin/products" element={<ProductsListScreen />} />
            <Route path="/admin/products/:id/edit" element={<ProductEditScreen />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
