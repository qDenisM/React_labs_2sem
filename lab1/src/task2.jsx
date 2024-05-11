import React from 'react'

let stocks = [
	{
		stock_name: 'EFX',
		company_name: 'Equifax Inc',
		price: 163.55,
		currency: 'USD',
		change: '+9.03',
	},
	{
		stock_name: 'IRM',
		company_name: 'Iron Mountain Inc',
		price: 33.21,
		currency: 'USD',
		change: '+1.42',
	},
	{
		stock_name: 'NTAP',
		company_name: 'NetApp Inc',
		price: 54.81,
		currency: 'USD',
		change: '-6.01',
	},
	{
		stock_name: 'CTL',
		company_name: 'Centurylink Inc',
		price: 13.79,
		currency: 'USD',
		change: '-1.37',
	},
]

let tableRow = i => {
	let arr = []
	let styleName = {
		color: 'black',
		border: '1px solid black'
	}
	for (let prop in stocks[i]) {
		if (stocks[i][prop] === stocks[i].change) {
			if (+stocks[i].change > 0) {
				styleName.color = 'green'
			} else {
				styleName.color = 'red'
			}
		}
		arr.push(<td style={styleName}>{stocks[i][prop]}</td>)
	}
	return arr
}

let rows = () => {
	let row = []
	for (let i = 0; i < stocks.length; i++) {
		row.push(<tr> {tableRow(i)} </tr>)
	}
	return row
}

const Task2 = () => {
	return (
	<table style ={{
		borderCollapse: 'collapse',
		marginLeft: '3px'
	}}> {rows()} </table>
	)
}

export default Task2