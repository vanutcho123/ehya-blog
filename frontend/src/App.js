import "./App.scss";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app font-openSans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/blog/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
