import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: '2021-3-3',
		pv: 0,
		amt: 0,
	},
	{
		name:'2021-3-4',
		pv: 0.025,
		amt: 0.025,
	},
	{
		name: '2021-3-7',
		pv: 0.15,
		amt: 0.15,
	},
	{
		name: '2021-3-6',
		pv: 0.25,
		amt: 0.25,
	},
	{
		name: '2021-3-5',
		pv: 0.35,
		amt: 0.35,
	}
];

export default class LinearGraph extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="100%" height="100%" className="white">
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
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					{/*<Legend />*/}
					<Line type="monotone" dataKey="pv" stroke="#40e0d0" strokeWidth={3} activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		);
	}
};
