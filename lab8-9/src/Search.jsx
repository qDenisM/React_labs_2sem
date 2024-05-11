import React, { useState } from 'react'

export default function Search({ products }) {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState([])

	const handleSearch = event => {
		const value = event.target.value
		setQuery(value)

		if (value.trim() === '') {
			setResults([])
			return
		}

		const filteredProducts = products.filter(product => {
			return product.name.toLowerCase().includes(value.toLowerCase())
		})

		setResults(filteredProducts)
	}

	return (
		<div>
			<input
				type='text'
				placeholder='Поиск товаров'
				value={query}
				onChange={handleSearch}
			/>
			<ul>
				{results.map(product => (
					<li key={product.id}>
						<h3>{product.name}</h3>
						<p>Количество: {product.quantity}</p>
						<p>Стоимость: {product.price}</p>
						{product.discount ? (
							<p>
								Стоимость со скидкой:{' '}
								{product.price - (product.price * product.discount) / 100}
							</p>
						) : (
							<p>Нет скидки</p>
						)}
						<p>Описание: {product.description}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
