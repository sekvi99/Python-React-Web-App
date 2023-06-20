import React from 'react';
import { Line  } from 'react-chartjs-2';
import { StockMarketData } from '../../interfaces/stockMarket.interface';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

interface ChartData {
    data: StockMarketData[];
  }

const StockMarketChart: React.FC<ChartData> = ({ data }) => {
    const chartData = {
      labels: data.map((stock) => stock.date),
      datasets: [
        {
          label: 'Open',
          data: data.map((stock) => stock.open),
        },
        {
            label: 'Close',
            data: data.map((stock) => stock.close),
        },
        {
            label: 'Low',
            data: data.map((stock) => stock.low),
        },
        {
            label: 'High',
            data: data.map((stock) => stock.high),
        }
      ],
    };
  
    return <Line  data={chartData} />;
  };
export default StockMarketChart;