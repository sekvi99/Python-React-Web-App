import React, { useState, useEffect } from 'react';
import { StockMarketData } from '../../interfaces/stockMarket.interface';
import { StockChartProps } from '../../interfaces/stockChart.interface';
import StockMarketChart from './stockChartComponent';

const StockMarket: React.FC<StockChartProps> = ( {symbol} ) => {
    const [data, setData] = useState<StockMarketData[] | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:5000/api/getStockMarketData/${symbol}`);
            const json = await response.json();
            setData(json.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [symbol]);

      
  return (
    <div>
    <h1>Stock market data of: {symbol}</h1>
    {data !== undefined ?
       (<StockMarketChart data={data} />) : (<h1>Data is undefined</h1>)}
  </div>
  )
}

export default StockMarket;