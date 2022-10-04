// import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
import SingleJoke from "./pages/SingleJoke";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import { getAllJokes } from "./services/jokesService";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { data, isLoading } = useQuery(["allJokes"], getAllJokes);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteLayout data={data} />}>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/:id" element={<SingleJoke />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
