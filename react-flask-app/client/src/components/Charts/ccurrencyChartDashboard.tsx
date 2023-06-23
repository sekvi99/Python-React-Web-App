import React, { useEffect, useState } from 'react'
import { CurrencyChartProps } from '../../interfaces/currencyChart.interface'
import { CurrencyData } from '../../interfaces/currency.interface'
import CurrencyMarketChart from './currencyCharComponent'
import { apiKey } from '../../helpers'

const CurrencyDashboard: React.FC<CurrencyChartProps> = ( {symbol} ) => {
  
  const [data, setData] = useState<CurrencyData[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/getCurrencyData/${symbol}`, {
                headers: {
                    'API-Key': apiKey
                }
            });
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
       (<div>
       <CurrencyMarketChart data={data} />
       <h1>Average: {(() => (data.reduce((acc, num) =>  acc + num.value, 0) / data.length).toFixed(2))()}</h1>
       </div>
       ) : (<h1>Data is undefined</h1>)}
    </div>
  )
}

export default CurrencyDashboard;
