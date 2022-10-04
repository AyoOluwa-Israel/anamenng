import React from "react";
import { IoIosFlash } from "react-icons/io";
import "./style.scss";
import { TbArrowNarrowRight } from "react-icons/tb";

const JokesCard = ({ joke }: any) => {
  return (
    <div className="jokesCard" key={joke.id}>
      <div className="jokesCard__title">
        <IoIosFlash />

        {joke?.categories?.length > 0 ? (
          joke?.categories?.map((el: any) => {
            return <p>{el.toUpperCase()}</p>;
          })
        ) : (
          <p>UNCATEGORIZED</p>
        )}
      </div>
      <p>{joke.value}</p>

      <div className="jokesCard__cardLink">
        <div></div>

        <div>
          <p>SEE STATS</p>
          <TbArrowNarrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default JokesCard;
