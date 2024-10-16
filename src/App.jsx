// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageShow from './components/ImageShow';
import About from './components/about';
 // Import Navbar to show on all pages

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
       
    {/* Include the Navbar for navigation */}
        <Routes>
          <Route path="/" element={<ImageShow />} /> {/* Main component */}
          <Route path="/about" element={<About />} /> {/* About page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
