import React, { useState } from 'react'

export default function SortTable({ products }) {
	const [sortField, setSortField] = useState(null)
	const [sortDirection, setSortDirection] = useState('asc')

	const handleSort = field => {
		if (field === sortField) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
		} else {
			setSortField(field)
			setSortDirection('asc')
		}
	}

	const sortedProducts = products.slice().sort((a, b) => {
		if (sortField) {
			if (a.isNew !== b.isNew) {
				return a.isNew ? -1 : 1
			}
			if (sortDirection === 'asc') {
				return a[sortField] > b[sortField] ? 1 : -1
			} else {
				return a[sortField] < b[sortField] ? 1 : -1
			}
		}
		return 0
	})

	return (
		<table>
			<thead>
				<tr>
					<th onClick={() => handleSort('name')}>Наименование</th>
					<th onClick={() => handleSort('price')}>Стоимость</th>
					<th onClick={() => handleSort('quantity')}>Количество</th>
					<th onClick={() => handleSort('discount')}>Скидка</th>
					<th onClick={() => handleSort('isNew')}>Новинка</th>
				</tr>
			</thead>
			<tbody>
				{sortedProducts.map(product => (
					<tr key={product.id}>
						<td>{product.name}</td>
						<td>{product.price}</td>
						<td>{product.quantity}</td>
						<td>{product.discount}%</td>
						<td>{product.isNew ? 'Да' : 'Нет'}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
