import React from "react";
import { Link } from "react-router-dom";

const HomePages = ({ daysx, setDaysx }) => {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  const handleClick = (day) => {
    if (Array.isArray(daysx) && !daysx.includes(day)) {
      setDaysx([...daysx, day]);  
    }
  };

  return (
    <div className="days-container">
      <h3>Select Days:</h3>
      <div className="button-container">
        {days.map((day, index) => (
          <button
            key={index}
            className="day-button"
            onClick={() => handleClick(day)}
          >
            {day}
          </button>
        ))}
      </div>

      
      <div className="selected-days-link">
        <Link to="/contact">Show Selected Days</Link>
      </div>
    </div>
  );
};

export default HomePages;
