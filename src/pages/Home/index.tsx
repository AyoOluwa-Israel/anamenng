import "./style.scss";
import Categories from "../../components/Categories";
import JokesCard from "../../components/JokesCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getAllJokes } from "../../services/jokesService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const { data } = useQuery(["allJokes"], getAllJokes);
  const [categoryValue, setCategoryValue] = useState(data);
  const { data: categoryData } = useQuery(["allCategories"], getAllCategories);

  const [categoryArray, setCategoryArray] = useState(categoryData);

  useEffect(() => {
    setCategoryValue(data);
  }, [data]);

  console.log(data);
  let x = 10;

  const filterCategory = (category: any) => {
    console.log(category);
    if (category === "all") {
      setCategoryValue(data);
      return;
    }

    const newData = data?.filter((data: any) => data?.categories[0] === category);
    setCategoryValue(newData);
  };
  return (
    <div className="homePage">
      <Categories categoryData={categoryData} filterCategory={filterCategory} />

      <div className="homePage__card">
        {categoryValue?.slice(0, x).map((joke: any) => {
          return (
            <Link to={`/${joke.value}`}>
              <JokesCard joke={joke} key={joke.url} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
