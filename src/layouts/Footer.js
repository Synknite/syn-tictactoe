import React from "react";
import FooterImage from "../assets/github.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterImage} style={{ width: "3rem" }} alt="footer"/>
    </div>
  );
};

export default Footer;
