import React from "react";
import FooterImage from "../assets/github.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={FooterImage} style={{ width: "3rem" }} />
    </div>
  );
};

export default Footer;
