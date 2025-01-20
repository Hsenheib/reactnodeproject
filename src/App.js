import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user";
import Header from "./pages/home";
import HomePages from './pages/homePages';
import SelectedDays from "./pages/SelectedDays";  
import Aboutpage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footerr from "./pages/Footerr";

function App() {
  const [daysx, setDaysx] = useState([]);  

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/header" element={<User />} />
          <Route path="/footer" element={<HomePages daysx={daysx} setDaysx={setDaysx} />} />
          <Route path="/AboutPage" element={<Aboutpage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          
          <Route path="/contact" element={<SelectedDays daysx={daysx} setDaysx={setDaysx} />} />
        </Routes>
      </div>
      < Footerr />
    </Router>
  );
}

export default App;

