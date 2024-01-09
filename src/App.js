import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, GitHubSearch } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/github-search" element={<GitHubSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
