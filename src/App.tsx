import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
import SingleJoke from "./pages/SingleJoke";

function App() {
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
