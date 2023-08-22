import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import "./Auth.css";
import login from "../../assets/auth/log in.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedin } = useSelector(selectedUser);
  const navigate = useNavigate();

  // check if user already loggedin
  useEffect(() => {
    if (isLoggedin) {
      navigate("/404notFound");
    }
  }, [isLoggedin, navigate]);

  // login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorEmail(false);
    setErrorPwd(false);
    if (email && pwd) {
      signInWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          setIsLoading(false);
          toast.success("logged in successfully ");

          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code.slice(
            error.code.indexOf("/") + 1,
            error.code.length
          );
          setIsLoading(false);
          if (errorCode.includes("user")) {
            setErrorEmail(true);
            toast.error("Wrong email address");
          } else if (errorCode.includes("password")) {
            setErrorPwd(true);
            toast.error("Wrong password");
          } else if (errorCode.includes("request")) {
            toast.warning(
              "please check your internet connection and try again."
            );
          }
        });
    } else {
      setIsLoading(false);
      toast.warning("don't leave any empty fields");
    }
  };

  // login with google account
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setIsLoading(false);
        toast.success(user.displayName + " has logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.code);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <Row className="account" lg={2} xs={1}>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Click Me</Accordion.Header>
                <Accordion.Body className="h5">
                  if you want to login as an admin to have access to the admin
                  panel use this <br />
                  Email : Admin@admin.com
                  <br />
                  Password: 123456
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <img src={login} alt={login} className="img-fluid" />
          </Col>
          <Col>
            <Card className="p-4 form">
              <h1 className="text-center">Login</h1>
              <Form className="m-4" onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className={errorEmail ? "text-danger" : ""}>
                    {errorEmail ? "Email Address*" : "Email Address"}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className={errorEmail ? "border-danger" : ""}
                    placeholder="Enter email"
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
                    placeholder="Password"
                    className={errorPwd ? "border-danger" : ""}
                    required
                    value={pwd}
                    onChange={(e) => {
                      setPwd(e.target.value);
                      setErrorPwd(false);
                    }}
                  />
                </Form.Group>
                <Button
                  className="w-100 mt-3 mb-3 btn"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
                <p className="fs-5">
                  <Link to="/reset">forget password ?!</Link>
                </p>
                <h5 className="text-center text-muted ">-- or --</h5>
              </Form>
              <div>
                <Button className="w-100 google btn" onClick={googleLogin}>
                  <AiOutlineGoogle size={25} /> Login With Google
                </Button>
                <h5 className="txt-decoration text-center text-muted mt-4">
                  don't have an account ? <Link to="/signUp"> sign up</Link>
                </h5>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
