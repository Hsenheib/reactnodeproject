import React from "react";
import './home.css'; 

const SelectedDays = ({ daysx, setDaysx }) => {
  
  const handleRemove = (dayToRemove) => {
    
    setDaysx(daysx.filter(day => day !== dayToRemove));
  };

  return (
    <div className="selected-days">
      <h3>Selected Days:</h3>
      <ul>
        {daysx.length > 0 ? (
          daysx.map((day, index) => (
            <li key={index}>
              {day}
              
              <button onClick={() => handleRemove(day)} className="remove-button">
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No days selected.</p>
        )}
      </ul>
    </div>
  );
};



export default SelectedDays;
