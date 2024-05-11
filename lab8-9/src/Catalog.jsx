import React, { useState } from 'react'
import SortTable from './SortTable'
import Search from './Search'
import './index.css'

export default function Catalog({ products }) {
	const [view, setView] = useState('catalog')

	const toggleView = () => {
		setView(view === 'catalog' ? 'table' : 'catalog')
	}

	return (
		<div>
			<button onClick={toggleView}>Переключить вид</button>
			<div className='main'>
				{view === 'catalog' ? (
					<div>
						<h1>Каталог товаров</h1>
						<Search products={products} />
						{products.map(product => (
							<div key={product.id}>
								<h3>{product.name}</h3>
								<p>
									Цена со скидкой:{' '}
									{product.price - (product.price * product.discount) / 100}
								</p>
								<p>Цена: {product.price}</p>
								<p>Описание: {product.description}</p>
								<img src={product.image} alt={product.name} />
								<p>{product.isNew ? 'Новинка' : ''}</p>
							</div>
						))}
					</div>
				) : (
					<SortTable products={products} />
				)}
			</div>
		</div>
	)
}
