import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
import SingleJoke from "./pages/SingleJoke";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleJoke />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
