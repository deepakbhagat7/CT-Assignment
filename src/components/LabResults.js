import React from 'react';

const LabResults = () => {
  return (
    <div className="lab-results">
      <h3>Lab Results</h3>
      <ul>
        <li>Blood Tests <button>Download</button></li>
        <li>CT Scans <button>Download</button></li>
        <li>Radiology Reports <button>Download</button></li>
        <li>X-Rays <button>Download</button></li>
        <li>Urine Test <button>Download</button></li>
      </ul>
    </div>
  );
};

export default LabResults;
