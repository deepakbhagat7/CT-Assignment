import React from 'react';

const VitalSigns = () => {
  return (
    <div className="vital-signs">
      <div className="vital-sign">
        <h4>Respiratory Rate</h4>
        <p>20 bpm</p>
      </div>
      <div className="vital-sign">
        <h4>Temperature</h4>
        <p>98.6°F</p>
      </div>
      <div className="vital-sign">
        <h4>Heart Rate</h4>
        <p>78 bpm</p>
      </div>
    </div>
  );
};

export default VitalSigns;
