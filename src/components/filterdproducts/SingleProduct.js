import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { oneProduct } from "../../redux/features/ProductSlice";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AddToCart } from "../../redux/features/CartSlice";
import { selectedUser } from "../../redux/features/AuthSlice";
import sale from "../../assets/payment and service/sale tag.jpg";

const SingleProduct = () => {
  const product = useSelector(oneProduct);
  const activeUser = useSelector(selectedUser);
  const productStorage = JSON.parse(localStorage.getItem("Product"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [viewCart, setViewCart] = useState(false);

  // add any available amount of prodcut to the cart
  const addToCart = (product) => {
    if (activeUser.isLoggedin) {
      if (activeUser.userName === "Admin") {
        toast.warning(
          "Admins can't buy products, login with a customer account to start shopping "
        );
        setCount(0);
      } else {
        const getProduct = productStorage.findIndex(
          (item) => item.id === product.id
        );
        if (productStorage[getProduct].inStock < count) {
          toast.error(
            `there is only (${productStorage[getProduct].inStock}) pieces available of this product`
          );
          setCount(productStorage[getProduct].inStock);
        } else {
          toast.success(
            count === 1
              ? " 1 item was added successfully to your cart"
              : `${count} items were added successfully to your cart`
          );
          dispatch(
            AddToCart({
              userID: activeUser.userId,
              id: product.id,
              fullName: product.fullName,
              image: product.image,
              quantity: count,
              price: product.price,
              sale: product.sale,
              category: product.category,
              brand: product.brand,
            })
          );

          setViewCart(true);
          setCount(0);
        }
      }
    } else {
      navigate("/login");
      toast.warning("please login first to start shopping");
    }
  };

  return (
    <div className="single-page">
      <div className="p-2 m-4 d-flex justify-content-center">
        {product.map((product, index) => {
          const available =
            productStorage[
              productStorage.findIndex((item) => item.id === product.id)
            ].inStock;

          return (
            <Row className="single-product" key={index}>
              <img
                className={product.sale > 0 ? "sale-img" : "d-none"}
                src={sale}
                alt={sale}
              />
              <Col lg={4} className="d-flex justify-content-center">
                <img
                  className="product-img"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </Col>
              <Col>
                <div className="product-info">
                  <h3 className="text-uppercase">{product.fullName}</h3>
                  <div className="priceTag ">
                    <h4
                      className={
                        product.sale > 0
                          ? "text-muted text-decoration-line-through"
                          : "text-muted"
                      }
                    >
                      ${product.price}
                    </h4>
                    <h3
                      className={product.sale > 0 ? "text-success" : "d-none"}
                    >
                      ${product.price - (product.price * product.sale) / 100}
                    </h3>
                    <span className="h5 text-danger">
                      ({product.sale}% off)
                    </span>
                  </div>
                  <h5 className="text-success">Quantity:</h5>
                  <div className="d-flex align-items-center count">
                    <button
                      onClick={() => {
                        count <= 0 ? setCount(0) : setCount(count - 1);
                      }}
                      disabled={available <= 0 ? true : false}
                    >
                      -
                    </button>
                    <input
                      disabled
                      type="number"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                    />
                    <button
                      onClick={() => setCount(count + 1)}
                      disabled={available <= 0 ? true : false}
                    >
                      +
                    </button>
                  </div>
                  <span
                    className={available >= 10 ? "text-success p-2" : "d-none"}
                  >
                    available in stock
                  </span>
                  <span
                    className={available < 10 ? "text-danger p-2" : "d-none"}
                  >
                    {available === 0
                      ? "not available in stock"
                      : `(${available}) pieces remaining in stock`}
                  </span>
                  <hr className="w-100 p-2" />
                  <h5>Product details:</h5>
                  <p className="text-black">{product.details}</p>
                  <div className="w-75 d-flex gap-5 add-cart">
                    <Button
                      className=""
                      onClick={() => addToCart(product)}
                      disabled={count <= 0 ? true : false}
                    >
                      Add To Cart
                    </Button>

                    <Button
                      className={!viewCart ? "d-none" : "  w-25"}
                      onClick={() => navigate("/cart")}
                    >
                      View Cart
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
