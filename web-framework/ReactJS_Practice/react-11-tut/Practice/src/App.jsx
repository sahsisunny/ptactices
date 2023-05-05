import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
