import React from "react";
import { Line } from "react-chartjs-2";
import { CurrencyData } from "../../interfaces/currency.interface";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

interface ChartData {
    data: CurrencyData[];
}

const CurrencyMarketChart: React.FC<ChartData> = ( {data} ) => {

    const chartData = {
        labels: data.map((readout) => readout.date),
        datasets: [
            {
                label: 'Shape of the currency in relation to [PLN]',
                data: data.map((readout) => readout.value),
            }
        ]
    };

    return <Line data={chartData} />

};

export default CurrencyMarketChart;