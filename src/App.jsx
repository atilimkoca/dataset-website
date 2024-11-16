// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Dataset from './pages/Dataset';

// import Dataset from './pages/Dataset';
// import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/dataset-website" element={<div className="home-page"><Home /></div>} />
          <Route path="/dataset-website/about" element={<About />} />
          <Route path="/dataset-website/dataset" element={<Dataset />} />
          
          {/* <Route path="/dataset" element={<Dataset />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
