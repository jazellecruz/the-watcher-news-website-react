import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import News from "./News";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} >
        <Route path="" element={<News category="general" />}/>
        <Route path="tech" element={<News category="technology" />} />
        <Route path="business" element={<News category="business" />}/>
        <Route path="politics" element={<News category="politics" />}/>
        <Route path="science" element={<News category="science" />}/>
        <Route path="sports" element={<News category="sports" />}/>
        <Route path="entertainment" element={<News category="entertainment" />}/>
      </Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    );
}