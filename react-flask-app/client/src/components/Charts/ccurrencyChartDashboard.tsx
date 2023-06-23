import React, { useEffect, useState } from 'react'
import { CurrencyChartProps } from '../../interfaces/currencyChart.interface'
import { CurrencyData } from '../../interfaces/currency.interface'
import CurrencyMarketChart from './currencyCharComponent'
import { environment } from '../../ environments/environment'

const CurrencyDashboard: React.FC<CurrencyChartProps> = ( {symbol} ) => {
  
  const [data, setData] = useState<CurrencyData[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${environment.url}/api/getCurrencyData/${symbol}`);
            const json = await response.json();
            setData(json.data);
        }catch (error){
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

  }, [symbol]);

  return (
    <div>
      <h1>Currency Rates data of: {symbol}</h1>
      {data !== undefined ?
       (<CurrencyMarketChart data={data} />) : (<h1>Data is undefined</h1>)}
    </div>
  )
}

export default CurrencyDashboard;
