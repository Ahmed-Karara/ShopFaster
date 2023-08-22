import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="p-3">
        <h1 className="text-dark mb-3"> Error 404 Not Found </h1>
        <h4 className="text-muted">Opps...this page was not found.</h4>
        <h1
          style={{ fontSize: "150px", marginTop: "50px", fontWeight: "bold" }}
        >
          4<spann style={{ color: "var(--color-primary)" }}>0</spann>4
        </h1>
        <h1 style={{ fontSize: "60px", marginTop: "10px", fontWeight: "bold" }}>
          Page Not Found !
        </h1>
        <Button onClick={() => navigate("/")} className="btn btn-primary mt-5">
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
