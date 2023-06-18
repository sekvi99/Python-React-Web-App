import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const DemoChart = () => {
  const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 150 },
    { name: 'Apr', value: 300 },
    { name: 'May', value: 400 },
    { name: 'Jun', value: 200 },
  ];

  // return (
  //   <LineChart width={400} height={300} data={data}>
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //     <Tooltip />
  //     <Legend />
  //     <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
  //   </LineChart>
  // );

  return (<h1>Hello</h1>);

};

export default DemoChart;
