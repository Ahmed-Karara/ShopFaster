import React, { useEffect, useState } from "react";
import "./Admin.css";
import ManageProducts from "../manageProducts/ManageProducts";
import admin from "../../assets/auth/admin.jpg";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/AuthSlice";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [manage, setManage] = useState(false);
  const user = useSelector(selectedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLoggedin) {
      if (user.userEmail !== "admin@admin.com" || window.innerWidth <= 1000) {
        navigate("/notAuthorized");
      }
    } else {
      navigate("/404notFound");
    }
  }, [user, navigate]);

  return (
    <div className="d-flex  flex-column align-items-center  w-100">
      <div className="d-flex  justify-content-center gap-4 mt-4 w-100 ">
        <Button
          className="btn btn-primary w-25"
          onClick={() => {
            setManage(!manage);
          }}
        >
          Manage Products
        </Button>
      </div>

      <div className="d-flex justify-content-center w-100   ">
        {!manage && (
          <img
            src={admin}
            alt={admin}
            style={{ width: "500px", height: "550px" }}
          />
        )}
        {manage && <ManageProducts />}
      </div>
    </div>
  );
};

export default Admin;
