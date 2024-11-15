// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Dataset from './pages/Dataset';
import { BrowserRouter as Router } from 'react-router-dom';

// import Dataset from './pages/Dataset';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/dataset-website"> {/* Add basename */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dataset" element={<Dataset />} />
      </Routes>
    </Router>
  );
}

export default App;
