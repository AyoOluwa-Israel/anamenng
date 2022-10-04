import React from "react";
import "./style.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div></div>

        <div className="header__left">
          <p>SO FUNKTIONIERT'S</p>

          <p>SONDRANGEBOTE</p>

          <div>
            <div>
              <BsFillPersonFill size={20} />
              <p> MAIN BERECICH</p>
            </div>

            <MdArrowDropDown size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
