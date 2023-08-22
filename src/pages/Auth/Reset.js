import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./Auth.css";
import resetPass from "../../assets/auth/forgot password.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/AuthSlice";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedin } = useSelector(selectedUser);
  const navigate = useNavigate();

  // check if user already loggedin
  useEffect(() => {
    if (isLoggedin) {
      navigate("/404notFound");
    }
  }, [isLoggedin, navigate]);

  const handleReset = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("check your email for the reset link");
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode.includes("found")) {
          setErrorEmail(true);
          toast.error("This email address does not exist");
        } else if (errorCode.includes("request")) {
          toast.warning("please check your internet connection and try again.");
        }
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <Row className="account" lg={2} xs={1}>
          <Col>
            <img src={resetPass} alt="password reset" className="img-fluid" />
          </Col>
          <Col>
            <Card className="p-4 form">
              <h1 className="text-center">Reset Password</h1>
              <Form className="m-4" onSubmit={handleReset}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className={errorEmail ? "text-danger" : ""}>
                    {errorEmail ? "Email Address*" : "Email Address"}
                  </Form.Label>
                  <Form.Control
                    className={errorEmail ? "border-danger" : ""}
                    type="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorEmail(false);
                    }}
                  />
                </Form.Group>

                <Button
                  className="w-100 mt-3 mb-3 btn"
                  variant="primary"
                  type="submit"
                >
                  Reset
                </Button>
              </Form>
              <div className="txt-decoration register">
                <Link className=" fs-5" to="/signUp">
                  sign up
                </Link>
                <Link className=" fs-5" to="/login">
                  login
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reset;
