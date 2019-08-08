import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			chartData:
			{
				labels:['Bangalore','Chennai','Gurugram','UK'],
				datasets:[
				{
					label:'Approved requests',
					data:[

							45,
							89,
							98,
							76

					],
					backgroundColor:[
							'rgba(25, 25, 112,1)',
							'rgba(25, 25, 112,1)',
							'rgba(25, 25, 112,1)',
							'rgba(25, 25, 112,1)'
              				




					]
				},{

					label:'Pending requests',
					data:[

							24,
							70,
							23,
							56

					],
					backgroundColor:[
							'rgba(128, 0, 0, 1)',
							'rgba(128, 0, 0, 1)',
							'rgba(128, 0, 0, 1)',
							'rgba(128, 0, 0, 1)'
							




					]


				}]
			}
		}
	}
	render()
	{
		return(
				<div className="chart">
				<Bar
  				data={this.state.chartData}
  				//width={100}
  				//height={50}
 				options={{ 
 					title:{
 						display:true,
 						text:'Location',
 						fontSize:25
 					},
 					legend:{
 						display:true,
 						position:'right'

 					}
 				}}
				/>
				</div>

			)
	}
}

export default Chart;