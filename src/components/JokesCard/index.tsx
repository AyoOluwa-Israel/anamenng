import { IoIosFlash } from "react-icons/io";
import "./style.scss";
import { TbArrowNarrowRight } from "react-icons/tb";

const JokesCard = ({ joke }: any) => {
  return (
    <div className="jokesCard" data-aos="zoom-in" data-aos-duration="1500" key={joke.id}>
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
      <p>{joke?.value?.length > 350 ? `${joke?.value.substring(0, 350)}...` : joke?.value}</p>

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
