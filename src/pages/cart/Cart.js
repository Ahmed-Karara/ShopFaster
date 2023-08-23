import React, { useEffect, useRef } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  AddToCart,
  RemoveAll,
  RemoveFromCart,
  item,
} from "../../redux/features/CartSlice";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { selectedUser } from "../../redux/features/AuthSlice";
import emptyCart from "../../assets/payment and service/empty cart.png";
import { ProductPage } from "../../redux/features/ProductSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const items = useSelector(item);
  const activeUser = useSelector(selectedUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCart = items.find((user) => user.userInfo.id === activeUser.userId);
  const userItems = items[items.indexOf(userCart)];
  const productStorage = JSON.parse(localStorage.getItem("Product"));

  // navigate to the product single page
  const itemPage = (product, category) => {
    dispatch(ProductPage(product));
    navigate("/singleProduct/" + category + "/" + product);
  };

  // increase product quantity
  const changeQuantity = (product) => {
    let count = 1;

    const getProduct = productStorage.findIndex(
      (item) => item.id === product.id
    );

    if (productStorage[getProduct].inStock < count) {
      toast.error("opps! this product is out of stock ");
    } else {
      dispatch(
        AddToCart({
          userID: activeUser.userId,
          id: product.id,
          fullName: product.fullName,
          image: product.image,
          price: product.price,
          sale: product.sale,
          category: product.category,
          brand: product.brand,
          quantity: count,
        })
      );
      toast.success(" item was updated successfully");
    }
  };

  const clearCart = () => {
    userItems.cart.map((item) => {
      dispatch(RemoveAll(item));
      return "";
    });
  };

  // prevent useEffect hook from mounting twice
  const clearEffect = useRef(true);

  useEffect(() => {
    if (clearEffect.current) {
      clearEffect.current = false;
      if (activeUser.isLoggedin) {
        if (activeUser.userName === "Admin") {
          navigate("/404notFound");
        }
      } else {
        navigate("/404notFound");
      }
    }
  }, [activeUser, navigate]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "90%", margin: "0 auto", minHeight: "85vh" }}
    >
      <h1 className=" text-muted fw-bold m-2 p-3">Shopping Cart</h1>
      <div className={userItems.quantity === 0 ? "d-none" : "shopping-cart"}>
        <div className="item info">
          <div>
            <span></span>
          </div>
          <div className="name">
            <span>Product</span>
          </div>
          <div className="quantity">
            <span>Quantity</span>
          </div>
          <div className="price">
            <span>price</span>
          </div>
          <div className="price">
            <span>SubTotal</span>
          </div>
          <div className="option">
            <span></span>
          </div>
        </div>
        {userItems.cart.map((item, index) => {
          const salePrice = item.price - (item.price * item.sale) / 100;
          return (
            <div
              key={index}
              className={userItems.quantity === 0 ? "d-none" : "item product"}
            >
              <div onClick={() => itemPage(item.id, item.category)}>
                <img src={item.image} alt={item.name} />
              </div>
              <div
                className="name"
                onClick={() => itemPage(item.id, item.category)}
              >
                <span>{item.fullName}</span>
              </div>
              <div className="price quantity">
                <span>{item.quantity}</span>

                <button onClick={() => changeQuantity(item)}>Add</button>
              </div>
              <div className="price">
                <span>${item.sale > 0 ? salePrice : item.price}</span>
              </div>
              <div className="price sub-total">
                <span>
                  $
                  {item.sale > 0
                    ? item.quantity * salePrice
                    : item.quantity * item.price}
                </span>
              </div>
              <div className="option">
                <button
                  onClick={() => {
                    dispatch(RemoveFromCart(item));
                    toast.success("item was removed successfully");
                  }}
                >
                  Remove item
                </button>
                <button
                  onClick={() => {
                    dispatch(RemoveAll(item));
                    toast.success("items was removed successfully");
                  }}
                  className={item.quantity === 1 ? "d-none" : ""}
                >
                  Remove All
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={userItems.quantity === 0 ? "d-none" : "total"}>
        <div className="check-out">
          <span>Cart Total</span>
          <div>
            <p className="mt-3">Quantity</p>
            <span>{userItems.quantity}</span>
          </div>
          <div>
            <p className="mt-3">SubTotal</p>
            <span>${userItems.totalPrice}</span>
          </div>
          <button
            className="mt-5 mb-3 p-2"
            onClick={() => navigate("/payment")}
          >
            Proceed to checkout
          </button>
        </div>
        <button
          className="clear-cart"
          onClick={() => {
            clearCart();
            toast.success("Your cart was cleared successfully");
          }}
        >
          Clear Cart
        </button>
      </div>

      <div
        className={
          userItems.quantity === 0
            ? "d-flex flex-column align-items-center gap-4 "
            : "d-none"
        }
      >
        <h4>you cart is empty...</h4>
        <Button
          className="align-self-center mb-3"
          onClick={() => navigate("/product")}
        >
          Start Shopping
        </Button>
        <img
          className="align-self-center"
          style={{ width: "200px", height: "200px" }}
          src={emptyCart}
          alt={emptyCart}
        />
      </div>
    </div>
  );
};

export default Cart;
