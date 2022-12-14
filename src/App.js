import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scrolltotop from "./components/Scroll-to-top/index";
import { ScrollFromBottom } from "./components/Scroll-to-top/ScrollFromBottom";
import Error404 from "./container/Error404/index";
import Home from "./container/Home/index";
import About from "./container/About/index";
import Products from './container/Products/index'
import Investment from './container/Investment/index'
import Contact from './container/Contact/index'
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/CustomCursor/Cursor";
import Swiper from './components/contentSwiper/index'


function App() {
  return (
    <div className="App">
      <Router>
        <Cursor />
        <Scrolltotop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/invest" element={< Investment />} />
          <Route path="/contact" element={<Contact />} />

          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <ScrollFromBottom />
      </Router>
    </div>
  );
}

export default App;
