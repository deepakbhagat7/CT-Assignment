import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <ul className="nav">
        <li>Overview</li>
        <li>Patients</li>
        <li>Schedule</li>
        <li>Message</li>
        <li>Transactions</li>
      </ul>
      <div className="doctor-info">
        <div className="doctor-name">
          <p>Dr. Jose Simmons</p>
          <span>General Practitioner</span>
        </div>
        <div className="doctor-photo">
          <img src="https://via.placeholder.com/50" alt="Doctor Photo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
