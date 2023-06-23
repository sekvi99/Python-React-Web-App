import React, { useState, useEffect } from 'react';
import { StockMarketData } from '../../interfaces/stockMarket.interface';
import { StockChartProps } from '../../interfaces/stockChart.interface';
import StockMarketChart from './stockChartComponent';
import { apiKey } from '../../helpers';

const StockMarket: React.FC<StockChartProps> = ( {symbol} ) => {
    const [data, setData] = useState<StockMarketData[] | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:5000/api/getStockMarketData/${symbol}`, {
              headers: {
                'API-Key': apiKey
              }
            });
            const json = await response.json();
            setData(json.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [symbol]);
  
    const calculateAverage = (data: StockMarketData[], key: keyof StockMarketData): number => {
        if (data.length === 0) {
          return 0;
        }
      
        const total = data.reduce((acc, num) => acc + Number(num[key]), 0);
        const average = total / data.length;
      
        return average;
      };


  return (
    <div>
    <h1>Stock market data of: {symbol}</h1>
    {data !== undefined ?
      
       (<div><StockMarketChart data={data} />
       <h1>Open Price: {(() => calculateAverage(data, 'open').toFixed(2))()}</h1>
       <h1>Close Price: {(() => calculateAverage(data, 'close').toFixed(2))()}</h1>
       <h1>High Price: {(() => calculateAverage(data, 'high').toFixed(2))()}</h1>

       </div>) : (<h1>Data is undefined</h1>)}
  </div>
  )
}

export default StockMarket;