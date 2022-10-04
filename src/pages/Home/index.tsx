import "./style.scss";
import Categories from "../../components/Categories";
import JokesCard from "../../components/JokesCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getAllJokes } from "../../services/jokesService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

const Home = ({ data }: any) => {
  const [categoryValue, setCategoryValue] = useState(data);
  const { data: categoryData } = useQuery(["allCategories"], getAllCategories);
  const [numOfCard, setNumOfCard] = useState(6);

  useEffect(() => {
    setCategoryValue(data);
  }, [data]);

  const filterCategory = (category: any) => {
    if (category === "all") {
      setCategoryValue(data);
      return;
    }

    const newData = data?.filter((data: any) => data?.categories[0] === category);
    setCategoryValue(newData);
    setNumOfCard(6);
  };

  const viewMore = () => {
    setNumOfCard((x) => x + 4);
  };
  return (
    <div className="homePage">
      <Categories categoryData={categoryData} filterCategory={filterCategory} />

      <div className="homePage__card">
        {categoryValue?.slice(0, numOfCard).map((joke: any) => {
          return (
            <Link to={`/${joke.value}`}>
              <JokesCard joke={joke} key={joke.url} />
            </Link>
          );
        })}
      </div>

      <Button onClick={viewMore} />
      {/* <Loader/> */}
    </div>
  );
};

export default Home;
