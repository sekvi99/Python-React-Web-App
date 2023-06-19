import React, {useState, useEffect} from 'react';
import { Currency } from '../../interfaces/demoData.interface';
import ExampleChart from './chartcomponent';

const DemoChart: React.FC = () => {
  const [data, setData] = useState<Currency[] | undefined>(undefined);

  const fetchData = async () =>{
    // Api call for dumb graph showcase at landing page
    const result = await fetch("https://api.coinlore.net/api/tickers/");
    const data = await result.json();
    setData(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (    
  <div>
    {data !== undefined ?
       (<ExampleChart data={data} />) : (<h1>Data is undefined</h1>)}
  </div>
  );
};

export default DemoChart;
