import { lazy } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("./pages/Home/Home"));
const Details = lazy(() => import("./pages/Details/Details"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:courseId" element={<Details />} />
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}

export default App;
