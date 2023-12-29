import React from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({voucherData}) => {

    const uniqueMonths = [...new Set(voucherData.map(data => new Date(data.created_at).getMonth()))];

    // Create labels array dynamically
    const labels = uniqueMonths.map(month => new Date(2023, month, 1).toLocaleString('default', { month: 'long' }));
    
    // Initialize an array to store counts for each month
    const dataCount = Array(labels.length).fill(0);

    // Iterate through voucherData
    voucherData.forEach((data) => {
      const month = new Date(data.created_at).getMonth();
      const index = uniqueMonths.indexOf(month);
      dataCount[index]++;
    });
        
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Count of Vouchers",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: dataCount,
        },
      ],
    };

    const options = {
        plugins: {
          title: {
            display: true,
            text: "Number of your issued BIR FORM 2306",
          },
          legend: {
            position: "bottom",
          },
        },
      };
      


  return (
    <>
    <Line data={data} options={options} />
    </>
  );
};

export default LineChart;