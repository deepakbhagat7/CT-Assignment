import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientInfo = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev/')
      .then(response => {
        setPatient(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="patient-info">
      <div className="patient-details">
        <h3>{patient.name}</h3>
        <p>Date of Birth: {patient.dob}</p>
        <p>Gender: {patient.gender}</p>
        <p>Contact Info: {patient.contact}</p>
        <p>Emergency Contacts: {patient.emergencyContact}</p>
        <p>Insurance Provider: {patient.insuranceProvider}</p>
        <button className="show-info-btn">Show All Information</button>
      </div>
      <img src={patient.photoUrl} alt="Patient Photo" />
    </div>
  );
};

export default PatientInfo;
