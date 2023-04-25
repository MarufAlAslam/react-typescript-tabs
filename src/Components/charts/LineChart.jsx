import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'IOS',
    completed: 25,
    estimated: 55,
  },
  {
    name: 'Android',
    completed: 45,
    estimated: 15,
  },
  {
    name: 'Desktop',
    completed: 81,
    estimated: 98,
  },
  {
    name: 'Web',
    completed: 11,
    estimated: 26,
  },
  {
    name: 'Other',
    completed: 22,
    estimated: 30,
  },
  {
    name: 'Total',
    completed: 100,
    estimated: 100,
  }
];

export default class DemoLineChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="estimated" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="completed" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
