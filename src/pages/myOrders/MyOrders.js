import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyOrders.css";

const MyOrders = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column align-items-center gap-4 text-muted text-center">
      <span className="text-muted mt-5" style={{ fontSize: "50px" }}>
        in progress...
      </span>
      <h4 className="">
        this page will help you tracking your orders status and will provide you
        all info you need.
      </h4>
      <h4 className="">
        for now your items will remain in your cart and won't go any where.
      </h4>
      <h4 className="">
        if there is any issues you can contact us from this link below.
      </h4>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/contactUs")}
      >
        contact us
      </button>
    </div>
  );
};

export default MyOrders;
