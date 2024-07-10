import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const DiagnosisHistory = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('YOUR_DIAGNOSIS_HISTORY_API_URL')
      .then(response => {
        const apiData = response.data;
        setData({
          labels: apiData.labels,
          datasets: [
            {
              label: 'Systolic',
              data: apiData.systolic,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
            {
              label: 'Diastolic',
              data: apiData.diastolic,
              borderColor: 'rgba(153, 102, 255, 1)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              fill: true,
            },
          ],
        });
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="diagnosis-history">
      <h3>Diagnosis History</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default DiagnosisHistory;
