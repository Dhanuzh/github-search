import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Search } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/github-search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
