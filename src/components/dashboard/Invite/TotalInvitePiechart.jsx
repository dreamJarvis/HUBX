import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

export default class TotalInvitePiechart extends PureComponent {
	state = {
		data : [
			{name: 'Total invites', value: 60},
			{name: 'Duration of event', value: 40},
		]
	}
	changeHandler = (e) => {
		if(e.target.name === "invites") {
			const updatedData = this.state.data.slice();
			updatedData[0].value = parseInt(e.target.value);
			this.setState({
				data: updatedData
			})
		} else {
			const updatedData = this.state.data.slice();
			updatedData[1].value = parseInt(e.target.value);
			this.setState({
				data: updatedData
			})
		}
	}
	render() {
		return (
			<div className="pie-chart-info row">
				<div className="input-values col s6 m6">
					<div className="input-field col m12 s12 total-invite">
						<div className="input-field col m12 s12">
							<label htmlFor="invites">Invites</label>
							<input type="number" onChange={this.changeHandler} name="invites" value={this.state.data[0].value}/>
						</div>
						<div className="input-field col m12 s12 invite-duration">
							<label htmlFor="duration">Duration</label>
							<input type="number" onChange={this.changeHandler} name="duration" value={this.state.data[1].value}/>
						</div>
					</div>
				</div>
				<div className="pie-chart col s6 m6">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart width={400} height={400}>
							<Pie
								data={this.state.data}
								cx="50%"
								cy="50%"
								labelLine={false}
								label={renderCustomizedLabel}
								outerRadius={80}
								fill="#8884d8"
								dataKey="value"
								nameKey="name"
							>
								{this.state.data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		);
	}
}