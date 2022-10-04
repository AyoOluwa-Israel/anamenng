import React, { useState } from "react";
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";

const HeroSection = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchBackground = (e: any) => {
    if (e.target.value !== "") {
      setSearchActive(true);
      setSearchValue(e.target.value);
      console.log(searchValue);
    } else {
      setSearchActive(false);
    }
  };

  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h1>The Joke Bible</h1>
        <p>Daily Laughs for you and yours</p>

        <div className={`hero__search ${searchActive ? "hero__searchActive" : ""}`}>
          <input
            type="text"
            placeholder="How can we make you laugh today ?."
            value={searchValue}
            onChange={handleSearchBackground}
          />

          <AiOutlineSearch size={28} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
