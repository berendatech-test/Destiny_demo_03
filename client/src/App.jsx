import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/News";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
