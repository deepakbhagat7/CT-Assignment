import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PatientInfo from './components/PatientInfo';
import DiagnosisHistory from './components/DiagnosisHistory';
import VitalSigns from './components/VitalSigns';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';
import './styles.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <PatientInfo />
          <DiagnosisHistory />
          <VitalSigns />
          <DiagnosticList />
          <LabResults />
        </div>
      </div>
    </div>
  );
}

export default App;
