import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Currency } from '../../interfaces/demoData.interface';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

interface ChartData {
    data: Currency[];
  }

const ExampleChart: React.FC<ChartData> = ({ data }) => {
    const chartData = {
      labels: data.map((currency) => currency.symbol),
      datasets: [
        {
          label: 'Price (USD)',
          data: data.map((currency) => parseFloat(currency.price_usd)),
        },
        {
            label: 'Volume24',
            data: data.map((currency) => currency.volume24),
        },
        {
            label: 'Price BTC',
            data: data.map((currency) => parseFloat(currency.price_btc)),
        }
      ],
    };
  
    return <Bar data={chartData} />;
  };
export default ExampleChart;