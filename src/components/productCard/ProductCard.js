import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from "react-redux";
import { ProductPage } from "../../redux/features/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";
import { AddToCart, item } from "../../redux/features/CartSlice";
import { selectedUser } from "../../redux/features/AuthSlice";
import { toast } from "react-toastify";
import sale from "../../assets/payment and service/sale tag.jpg";

const ProductCard = ({ product }) => {
  const activeUser = useSelector(selectedUser);
  const cartitem = useSelector(item);
  const productStorage = JSON.parse(localStorage.getItem("Product"));

  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // view the product details in a single page or login first
  const viewDetails = (product) => {
    dispatch(ProductPage(product));
    navigate("/singleProduct/" + category + "/" + product);
  };

  // add only 1 item of the product to the cart
  const buyNow = (product) => {
    if (activeUser.isLoggedin) {
      if (activeUser.userName === "Admin") {
        toast.warning(
          "Admins can't buy products, login with a customer account to start shopping "
        );
      } else {
        // check if the id of the active user equal to the id of the cart user
        const userCart = cartitem.find(
          (user) => user.userInfo.id === activeUser.userId
        );
        // check if this product already exists in the user cart
        const exist = cartitem[cartitem.indexOf(userCart)].cart.find(
          (item) => product.id === item.id
        );
        const getProduct = productStorage.findIndex(
          (item) => item.id === product.id
        );

        if (!exist) {
          if (productStorage[getProduct].inStock <= 0) {
            toast.warning("this product is not available at the moment");
          } else {
            dispatch(
              AddToCart({
                userID: activeUser.userId,
                id: product.id,
                fullName: product.fullName,
                image: product.image,
                quantity: 1,
                price: product.price,
                sale: product.sale,
                category: product.category,
                brand: product.brand,
              })
            );

            navigate("/cart");
          }
        } else {
          toast.warning(
            "this product is already in your cart if you want more go to view details"
          );
        }
      }
    } else {
      navigate("/login");
      toast.warning("please login first to start shopping");
    }
  };

  return (
    <div className="p-4 m-4 d-flex justify-content-around flex-wrap gap-3">
      {product.map((product, index) => {
        return (
          <div className="product-card" key={index}>
            <img
              className={product.sale > 0 ? "sale-img" : "d-none"}
              src={sale}
              alt={sale}
            />
            <img
              className="product-img"
              src={product.image}
              alt={product.name}
              loading="lazy"
            />
            <div className="card-body">
              <div className="card-info">
                <h4 className="product-name">{product.name}</h4>
                <div className="priceTag ">
                  <span
                    className={
                      product.sale > 0
                        ? "text-muted text-decoration-line-through h4"
                        : "h3 text-success"
                    }
                  >
                    ${product.price}
                  </span>
                  <h3
                    className={
                      product.sale > 0 ? "text-success fw-normal" : "d-none"
                    }
                  >
                    ${product.price - (product.price * product.sale) / 100}
                  </h3>
                </div>
                <button onClick={() => viewDetails(product.id)}>
                  View Details
                </button>
              </div>
              <hr />
              <p>{product.desc}</p>
              <div className="btn-group">
                <button
                  title="you can only buy 1 item when you click buy now, if you want more click on view details "
                  onClick={() => buyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
