import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeroSection = ({ data }: any) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);

  const handleSearchBackground = (e: any) => {
    if (e.target.value !== "") {
      setSearchActive(true);
      setSearchValue(e.target.value);
    } else {
      setSearchActive(false);
      setActiveSearch(false);
      setFilterData([]);
    }
  };

  const closeSearch = () => {
    setSearchActive(false);
    setActiveSearch(false);
  };

  const filterSearchFn = useCallback(() => {
    if (searchValue !== "") {
      const filterSearch = data?.filter((el: any) => el?.value.toLowerCase().indexOf(searchValue?.toLowerCase()) > -1);

      if (filterSearch.length !== 0) {
        setFilterData(filterSearch);
      }
      setActiveSearch(true);
    } else {
      setFilterData([]);
      setActiveSearch(false);
    }
  }, [data, searchValue]);

  useEffect(() => {
    filterSearchFn();
  }, [filterSearchFn, searchValue]);

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

          {activeSearch && (
            <div className="hero__searchContainer">
              {filterData?.slice(0, 7).map((el: any) => {
                return (
                  <Link to={`/${el.value}`} onClick={closeSearch}>
                    <p>{el.value.substring(0, 20)}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
