import React, { useState } from 'react'

export default function ProductCatalog() {
	const columns = [
		{ key: 'id', label: '#' },
		{ key: 'name', label: 'Название' },
		{ key: 'cost', label: 'Стоимость' },
		{ key: 'amount', label: 'Количество' },
	]

	const items = [
		{
			id: 1,
			name: 'VOOPOO V.Thru Pro',
			cost: 70,
			amount: 9,
		},
		{
			id: 2,
			name: 'GEEKVAPE Aegis Boost 2',
			cost: 120,
			amount: 5,
		},
		{
			id: 3,
			name: 'GEEKVAPE Aegis Hero 2',
			cost: 100,
			amount: 1,
		},
		{
			id: 4,
			name: 'SMOANT Charon Baby Plus',
			cost: 60,
			amount: 0,
		},
		{
			id: 5,
			name: 'SMOANT Pasito Mini',
			cost: 80,
			amount: 3,
		},
	]

	const [sortKey, setSortKey] = useState(null)
	const [sortOrder, setSortOrder] = useState('asc')

	const handleSort = key => {
		if (sortKey === key) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
		} else {
			setSortKey(key)
			setSortOrder('asc')
		}
	}

	const sortedItems = items.slice().sort((a, b) => {
		if (sortKey === 'name') {
			return a.name.localeCompare(b.name) * (sortOrder === 'asc' ? 1 : -1)
		}
		return (a[sortKey] - b[sortKey]) * (sortOrder === 'asc' ? 1 : -1)
	})

	return (
		<table>
			<thead>
				<tr>
					{columns.map(column => (
						<td
							style={{
								cursor: 'pointer',
							}}
							key={column.key}
							onClick={() => handleSort(column.key)}
						>
							{column.label}{' '}
						</td>
					))}
				</tr>
			</thead>
			<tbody>
				{sortedItems.map((item, index) => (
					<tr
						key={index}
						style={{
							backgroundColor:
								item.amount < 3 && item.amount !== 0
									? 'yellow'
									: item.amount === 0
									? 'red'
									: 'transparent',
						}}
					>
						<td>{index + 1}</td>
						<td>{item.name}</td>
						<td>{item.cost}</td>
						<td>{item.amount}</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan={2}>Общее</td>
					<td>
						{items.reduce(
							(totalCost, item) => totalCost + item.cost * item.amount,
							0
						)}
					</td>
					<td>
						{items.reduce((totalAmount, item) => totalAmount + item.amount, 0)}
					</td>
				</tr>
			</tfoot>
		</table>
	)
}
