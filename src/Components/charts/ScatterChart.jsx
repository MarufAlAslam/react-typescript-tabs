import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

const data = [
    { x: 25, y: 55, z: 200 },
    { x: 45, y: 15, z: 260 },
    { x: 81, y: 98, z: 400 },
    { x: 11, y: 26, z: 540 },
    { x: 22, y: 30, z: 430 },
    { x: 100, y: 100, z: 430 },
];

export default class DemoScatterCahart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-scatter-chart-edeu2s';

    render() {
        return (
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="y" name="Estimated" />
                    <YAxis type="number" dataKey="x" name="Completed" />
                    <ZAxis type="number" dataKey="z" range={[0, 1500]} name="size" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Completed" zAxis={20} data={data} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        );
    }
}
