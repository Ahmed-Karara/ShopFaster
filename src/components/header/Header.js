import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart, FaUserCircle, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  removeActiveUser,
  selectedUser,
} from "../../redux/features/AuthSlice";
import { ShowOnLogin, HideOnLogin } from "../hiddenLinks/HiddenLinks";
import { item, UserCart } from "../../redux/features/CartSlice";

//logo
export const logo = (
  <div className="logo txt-decoration">
    <Link to="/">ShopFaster</Link>
  </div>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(item);
  const activeUser = useSelector(selectedUser);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  // prevent useEffect hook from mounting twice
  const clearEffect = useRef(true);

  //monitor the current logged in user
  useEffect(() => {
    if (clearEffect.current) {
      clearEffect.current = false;
      setIsLoading(true);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const u1 = user.email.slice(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setUserName(user.displayName);
          if (user.displayName === null) {
            setUserName(uName);
          }
          dispatch(
            setActiveUser({
              id: user.uid,
              email: user.email,
              userName: user.displayName || uName,
            })
          );
          setIsLoading(false);
          dispatch(
            UserCart({
              userInfo: {
                id: user.uid,
                email: user.email,
                userName: user.displayName || uName,
              },
              cart: [],
              quantity: 0,
              totalPrice: 0,
            })
          );
        } else {
          setIsLoading(false);
          dispatch(removeActiveUser());
        }
      });
    }
  }, [dispatch, userName, activeUser]);

  // logout logic
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("logged out successfully");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const userCart = cartItems.find(
    (user) => user.userInfo.id === activeUser.userId
  );

  // header cart icon
  const cart = (
    <span
      className={userName === "Admin" ? "d-none" : "cart txt-decoration"}
      title="shopping cart"
    >
      <Link to="/cart">
        <FaShoppingCart
          size={32}
          color={
            cartItems[cartItems.indexOf(userCart)].quantity > 0
              ? "#007bff"
              : "black"
          }
        />
        <span
          className={
            cartItems[cartItems.indexOf(userCart)].quantity > 0 ? "" : "d-none"
          }
        >
          {cartItems[cartItems.indexOf(userCart)].quantity}
        </span>
      </Link>
    </span>
  );

  return (
    <header>
      {isLoading && <Loader />}
      <div className="header txt-decoration">
        {logo}
        <nav
          className={
            showMenu || window.innerWidth >= 876 ? "nav" : "hide-nav nav "
          }
        >
          <div className="menu-item " onClick={hideMenu}>
            <span>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </span>
            <span>
              <NavLink to="/product">Products</NavLink>
            </span>
            <span>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </span>
            <ShowOnLogin>
              <span className={userName === "Admin" ? "" : "d-none"}>
                <NavLink to="/admin">Admin Panel</NavLink>
              </span>
            </ShowOnLogin>
          </div>
          <div className="header-right" onClick={hideMenu}>
            <ShowOnLogin>
              <Link className="user-name">
                <FaUserCircle size={20} />
                Hi {userName}
              </Link>
              <span className={userName === "Admin" ? "d-none" : ""}>
                <NavLink to="/my-orders">My Orders</NavLink>
              </span>
              <span>
                <Link onClick={handleLogOut}>Logout</Link>
              </span>
              {cart}
            </ShowOnLogin>
            <HideOnLogin>
              <span>
                <NavLink to="/login">Log in</NavLink>
              </span>
              <span>
                <NavLink to="/signUp">Sign up</NavLink>
              </span>
            </HideOnLogin>
          </div>
        </nav>
        <div className="sub-menu">
          <ShowOnLogin>{cart}</ShowOnLogin>
          <span>
            {showMenu ? (
              <FaTimes size={25} color="black" onClick={toggleMenu} />
            ) : (
              <HiOutlineMenuAlt3 size={25} color="black" onClick={toggleMenu} />
            )}
          </span>
        </div>
      </div>
      <div className={showMenu ? "black-screen" : ""} onClick={hideMenu}></div>
    </header>
  );
};

export default Header;
