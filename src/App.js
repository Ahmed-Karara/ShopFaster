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
          <Route path="/*" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/filteredProducts/:category"
            element={<FilteredProducts />}
          />
          <Route
            path="/singleProduct/:category/:id"
            element={<SingleProduct />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notAuthorized" element={<NotAuthorized />} />
          <Route path="/404notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404notFound" />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
