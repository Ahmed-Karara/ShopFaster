import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./Auth.css";
import signUpImg from "../../assets/auth/sign up.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/AuthSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedin } = useSelector(selectedUser);

  // password regex experission
  const pwRegEx = /^[a-z0-9]{6}$/i;

  const navigate = useNavigate();

  // check if user already loggedin
  useEffect(() => {
    if (isLoggedin) {
      navigate("/404notFound");
    }
  }, [isLoggedin, navigate]);

  // signUp with email and password
  const handleSignUp = (e) => {
    e.preventDefault();
    if (email && pwd && confirmPwd) {
      const resultPwd = pwRegEx.test(pwd);
      if (resultPwd) {
        if (pwd === confirmPwd) {
          setIsLoading(true);
          setErrorPwd(false);

          createUserWithEmailAndPassword(auth, email, pwd)
            .then(() => {
              setIsLoading(false);
              toast.success("signed up successfully");
              navigate("/");
            })
            .catch((error) => {
              const errorCode = error.code.slice(
                error.code.indexOf("/") + 1,
                error.code.length
              );
              setIsLoading(false);
              toast.error(errorCode);
              if (errorCode.includes("use")) {
                toast.error("this email is already exists, try another one.");
                setErrorEmail(true);
              } else if (errorCode.includes("weak")) {
                toast.error("password must be atleast 6 digits.");
                setErrorPwd(true);
              } else if (errorCode.includes("request")) {
                toast.warning(
                  "please check your internet connection and try again."
                );
              } else if (errorCode.includes("invalid")) {
                toast.warning("please enter a valid email address.");
              }
            });
        } else {
          toast.error("passwords doesn't match");
          setErrorPwd(true);
        }
      } else {
        toast.error(
          "password can contain only numbers and letters and atleast 6 digits long"
        );
        setErrorPwd(true);
      }
    } else {
      toast.warning("please don't leave any empty fields");
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <Row className="account" lg={2} xs={1}>
          <Col>
            <Card className="p-4 form">
              <h1 className="text-center">Sign Up</h1>
              <Form className="m-4" onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className={errorEmail ? "text-danger" : ""}>
                    {errorEmail ? "Email Address*" : "Email Address"}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className={errorEmail ? "border-danger" : ""}
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorEmail(false);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={errorPwd ? "text-danger" : ""}>
                    {errorPwd ? "Password*" : "Password"}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    className={errorPwd ? "border-danger" : ""}
                    placeholder="Password"
                    required
                    value={pwd}
                    onChange={(e) => {
                      setPwd(e.target.value);
                      setErrorPwd(false);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label
                    className={
                      pwd !== confirmPwd ? "text-danger" : "text-success"
                    }
                  >
                    {pwd !== confirmPwd
                      ? "Confirm Password X"
                      : "Confirm Password "}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPwd}
                    onChange={(e) => {
                      setConfirmPwd(e.target.value);
                      setErrorPwd(false);
                    }}
                  />
                </Form.Group>
                <Button
                  className="w-100 mt-3 mb-3 btn"
                  variant="primary"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
              <div>
                <h5 className="txt-decoration text-center text-muted m-2">
                  already have an account ? <Link to="/login">login</Link>
                </h5>
              </div>
            </Card>
          </Col>
          <Col lg={{ order: "last" }} xs={{ order: "first" }}>
            <img
              src={signUpImg}
              alt="signUp"
              className="img-fluid"
              width={600}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
