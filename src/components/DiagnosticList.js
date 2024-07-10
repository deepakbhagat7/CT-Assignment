import React from 'react';

const DiagnosticList = () => {
  return (
    <div className="diagnostic-list">
      <h3>Diagnostic List</h3>
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hypertension</td>
            <td>Chronic high blood pressure</td>
            <td>Under Observation</td>
          </tr>
          <tr>
            <td>Type 2 Diabetes</td>
            <td>Insulin resistance and elevated blood sugar</td>
            <td>Cured</td>
          </tr>
          <tr>
            <td>Asthma</td>
            <td>Recurrent episodes of bronchial constriction</td>
            <td>Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
