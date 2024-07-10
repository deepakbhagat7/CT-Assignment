import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Tech.Care</h2>
      </div>
      <ul className="patients-list">
        <li>Emily Williams <span>Female, 18</span></li>
        <li>Ryan Johnson <span>Male, 45</span></li>
        <li>Brandon Mitchell <span>Male, 36</span></li>
        <li className="active">Jessica Taylor <span>Female, 28</span></li>
        <li>Samantha Johnson <span>Female, 56</span></li>
        <li>Ashley Martinez <span>Female, 54</span></li>
        <li>Olivia Brown <span>Female, 32</span></li>
        <li>Tyler Davis <span>Male, 19</span></li>
        <li>Kevin Anderson <span>Male, 30</span></li>
        <li>Dylan Thompson <span>Male, 36</span></li>
        <li>Nathan Evans <span>Male, 58</span></li>
        <li>Mike Nolan <span>Male, 31</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
