import { Col, Row, Form } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import "./ContactUs.css";
import contactUs from "../../assets/auth/contactus.jpg";

import { toast } from "react-toastify";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    toast.success(
      "your message was sent successfully, we will send our response very soon "
    );
    setName("");
    setEmail("");
    setArea("");
  };

  return (
    <Row className="contact-us">
      <div className="contact-message">
        <img src={contactUs} alt={contactUs} />
        <h1 className="">Contact Us</h1>
        <h4 className="mt-5">get in touch wiht us, if you need any help !</h4>
      </div>

      <Col className="d-flex flex-column justify-content-start align-items-center ">
        <Form className="d-flex flex-column p-4" onSubmit={sendEmail}>
          <Form.Group className="mt-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your active email"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              value={area}
              onChange={(e) => setArea(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <button className="btn btn-primary w-50 m-5">Send Message</button>
        </Form>
      </Col>
      <Col className="d-flex flex-column justify-content-start align-items-center ">
        <div className="contact-icon">
          <h3 className="text-center text-muted mb-3">contact information</h3>
          <span>
            <FaPhoneAlt className="text-success  " size={22} />
            <p>+123 456 789</p>
          </span>
          <span>
            <FaEnvelope size={22} />
            <p>Support@shopFaster.com</p>
          </span>
          <span>
            <GoLocation className="text-danger" size={25} />
            <p>Cairo, Egypt</p>
          </span>
          <span>
            <FaTwitter className="text-primary" size={22} />
            <p>@ShopFaster</p>
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default ContactUs;
