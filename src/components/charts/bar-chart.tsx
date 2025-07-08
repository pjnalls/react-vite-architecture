import { Bar } from 'react-chartjs-2';
import '@/styles/charts/bar-chart.css';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Quarterly and Monthly Temperatures (°F)',
      backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(132,99,255,0.2)', 'rgba(130,255,90,0.2)'],
      borderColor: ['rgba(255,99,132,1)', 'rgba(132,99,255,1)', 'rgba(130,130,99,1)'],
      borderWidth: 1,
      hoverBackgroundColor: ['rgba(255,99,132,0.4)', 'rgba(132,99,255,0.4)', 'rgba(132,255,99,0.4)'],
      hoverBorderColor: ['rgba(255,99,132,1)', 'rgba(132,99,255,1)', 'rgba(99,255,132,1)'],
      data: [4, 10, 30, 45, 56, 55, 40, 30, 20, 10, 5, 1],
    },
  ],
};

const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: 'Average Temperatures (°F) in Halstown',
      },
      beginAtZero: true,
    },
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
  },
};

const BarChart = () => {
  return (
    <div className="bar-chart-container">
      <Bar data={data} options={options} className="bar-chart" />
    </div>
  );
};

export default BarChart;
