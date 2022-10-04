import React from "react";
import "./style.scss";
import { TbArrowNarrowRight } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <p>
          GOT JOKES? GET PAID <br /> FOR SUBMITTING!
        </p>
        <div className="footer__submit">
          <p>SUBMIT JOKE</p>
          <TbArrowNarrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
