import "./style.scss";
import Categories from "../../components/Categories";
import HeroSection from "../../components/HeroSection";
import JokesCard from "../../components/JokesCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getAllJokes } from "../../services/jokesService";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useQuery(["allJokes"], getAllJokes);
  const { data: categoryData } = useQuery(["allCategories"], getAllCategories);

  console.log(data);
  let x = 10;
  return (
    <div className="homePage">
      <HeroSection />
      <Categories categoryData={categoryData} />

      <div className="homePage__card">
        {data?.slice(0, x).map((joke: any) => {
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
