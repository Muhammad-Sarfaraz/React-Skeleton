import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import { LoadingContext } from "./contexts/LoadingContext";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React boilerplate by Sarfaraz!</h1>

      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
