import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const data = {
    labels: ["User 1", "User 2", "User 3"],
    datasets: [
      {
        label: "Profile Completion",
        data: [80, 60, 90],
        backgroundColor: ["blue", "green", "red"],
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
