import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  Home,
  ContactUs,
  Login,
  SignUp,
  Admin,
  Reset,
  Cart,
  MyOrders,
  Payment,
} from "./pages/index";
import {
  Header,
  Footer,
  SingleProduct,
  FilteredProducts,
  Product,
  NotAuthorized,
  NotFound,
} from "./components/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { item } from "./redux/features/CartSlice";

const ScrollTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const cartItems = useSelector(item);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <ToastContainer />
        <Header />
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route path="/home/product" element={<Product />} />
          <Route path="/home/contactUs" element={<ContactUs />} />
          <Route path="/home/login" element={<Login />} />
          <Route path="/home/signUp" element={<SignUp />} />
          <Route path="/home/reset" element={<Reset />} />
          <Route path="/home/admin" element={<Admin />} />
          <Route
            path="/home/filteredProducts/:category"
            element={<FilteredProducts />}
          />
          <Route
            path="/home/singleProduct/:category/:id"
            element={<SingleProduct />}
          />
          <Route path="/home/cart" element={<Cart />} />
          <Route path="/home/payment" element={<Payment />} />
          <Route path="/home/my-orders" element={<MyOrders />} />
          <Route path="/home/notAuthorized" element={<NotAuthorized />} />
          <Route path="/home/404notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404notFound" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
