import React from "react";
import noAuthorization from "../../assets/auth/no authorization.webp";

const NotAuthorized = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "4%",
        textAlign: "center",
      }}
    >
      <div className="p-3">
        <h1 className="text-dark mb-3"> Error 401 No Authorization </h1>
        <h4 className="text-muted">
          Opps... you are not authoriz view to this page.
          <br />
          it's either you are not an admin or you are viewing this page from
          tablet or mobile.
        </h4>
      </div>
      <div
        style={{
          margin: "0 auto",
          width: "350px",
          height: "450px",
        }}
      >
        <img
          style={{ width: "350px", height: "450px", objectFit: "contain" }}
          src={noAuthorization}
          alt={noAuthorization}
        />
      </div>
    </div>
  );
};

export default NotAuthorized;
