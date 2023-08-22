import React, { useEffect, useRef } from "react";
import { Alert, Button, Card, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { item } from "../../redux/features/CartSlice";
import visa from "../../assets/payment and service/Visa.jpg";
import masterCard from "../../assets/payment and service/MasterCard.jpg";
import emptyCart from "../../assets/payment and service/empty cart.png";
import { selectedUser } from "../../redux/features/AuthSlice";

const Payment = () => {
  const navigate = useNavigate();
  const check = useSelector(item);
  const activeUser = useSelector(selectedUser);
  const userCart = check.find((user) => user.userInfo.id === activeUser.userId);

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

  const payCheck = (e) => {
    e.preventDefault();
    navigate("/my-orders");
  };
  return (
    <>
      {check[check.indexOf(userCart)].quantity <= 0 ? (
        <div className="d-flex flex-column align-items-center m-5 p-3">
          <h4 className="text-center mb-5">
            {activeUser.isLoggedin
              ? "you have no items in your cart please add some to start purchase"
              : "please log in first to start shopping"}
          </h4>
          <Button
            className={
              activeUser.isLoggedin ? "d-none" : "btn-primary p-1 w-25 mb-4"
            }
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <img
            style={{ width: "300px", height: "300px" }}
            src={emptyCart}
            alt={emptyCart}
          />
        </div>
      ) : (
        <Row className="d-flex justify-content-center p-3 m-3">
          <Card className="" style={{ maxWidth: "600px" }}>
            <Form className=" m-3">
              <Alert className="text-danger text-center h5 m-2 p-3">
                This is a fake payment process, you can insert any information
                and the process will be successful.
              </Alert>
              <div className="d-flex justify-content-around  gap-3">
                <img
                  src={visa}
                  alt="visa"
                  style={{
                    width: "120px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={masterCard}
                  style={{
                    width: "120px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                  alt="master-card"
                />
              </div>
              <hr className="w-100" />
              <Form.Group className="mb-3 p-3">
                <Form.Control type="text" placeholder="Card name" required />
              </Form.Group>

              <Form.Group className="mb-3 p-3">
                <Form.Control
                  type="number"
                  placeholder="Card number"
                  required
                />
              </Form.Group>

              <Form.Group className="d-flex gap-5 mb-3 p-3">
                <Form.Control
                  className="w-50"
                  type="number"
                  placeholder="Expiry month"
                  required
                />
                <Form.Control
                  className="w-50 "
                  type="number"
                  placeholder="Expiry year"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 p-3">
                <Form.Control
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 p-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="save card data for future transactions"
                />
              </Form.Group>
              <span className="text-uppercase h5">
                Total Due (USD) : ${check[check.indexOf(userCart)].totalPrice}
              </span>
              <div className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  type="submit"
                  className="m-3 w-50"
                  onClick={payCheck}
                >
                  pay now
                </Button>
                <Button
                  variant="danger"
                  type="button"
                  className="m-3 w-50"
                  onClick={() => navigate("/cart")}
                >
                  back to cart
                </Button>
              </div>
            </Form>
          </Card>
        </Row>
      )}
    </>
  );
};

export default Payment;
