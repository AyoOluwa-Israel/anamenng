import { useQuery } from "@tanstack/react-query";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { getAJoke, getAllJokes } from "../../services/jokesService";
import Up from "../../assets/up.png";
import Down from "../../assets/down.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";

const SingleJoke = () => {
  const { id }: any = useParams();

  const query = id.substring(0, 30);

  const { data } = useQuery(["singleJoke"], () => getAJoke(query));
  const { data: allJokes } = useQuery(["allJokes"], getAllJokes);

  console.log("data", data);
  return (
    <div className="singleJoke">
      <div className="singleJoke__container">
        <Link to="/">
          <div className="singleJoke__backButton">
            <IoIosArrowBack />
          </div>
        </Link>

        <div className="singleJoke__wrapper">
          <div className="singleJoke__left">
            <div className="singleJoke__leftTop">
              <div className="singleJoke__leftHeader">
                <div className="singleJoke__leftTop__icon">
                  <GoPrimitiveDot />
                  <p>
                    {data?.categories?.length > 0 ? (
                      data?.categories?.map((el: any) => {
                        return <>{el.toUpperCase()}</>;
                      })
                    ) : (
                      <>UNCATEGORIZED</>
                    )}{" "}
                    JOKE
                  </p>
                </div>

                <div></div>
              </div>

              <h1>
                The{" "}
                {data?.categories?.length > 0 ? (
                  data?.categories?.map((el: any) => {
                    return <>{el.toUpperCase()}</>;
                  })
                ) : (
                  <>UNCATEGORIZED</>
                )}{" "}
                Joke
              </h1>
              <p>{data?.value}</p>
            </div>
            <div className="singleJoke__leftBottom">
              <div className="singleJoke__vote">
                <div>
                  <div>
                    <img src={Up} alt="Up" />
                  </div>
                  <p>328</p>
                </div>

                <div>
                  <div>
                    <img src={Down} alt="Down" />
                  </div>
                  <p>98</p>
                </div>
              </div>

              <div className="singleJoke__buttons">
                <div>
                  <IoIosArrowBack />
                  <p>PREV. JOKE</p>
                </div>
                <div>
                  <p>NEXT JOKE</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>

          <div className="singleJoke__right">
            <h3>THE TOP JOKES THIS WEEK</h3>

            {allJokes?.slice(0, 4).map((joke: any) => {
              return <p>{`${joke.value.substring(0, 40)}...`}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJoke;
