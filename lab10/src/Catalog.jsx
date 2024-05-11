import React from 'react'

export default function Catalog({ products, onAddToCart }) {
	return (
		<div>
			<h1>Каталог товаров</h1>
			<div className='main'>
				{products.map(product => (
					<div key={product.id}>
						<h3>{product.name}</h3>
						<p>
							Цена со скидкой:{' '}
							{product.price - (product.price * product.discount) / 100}
						</p>
						<p>Цена: {product.price}</p>
						<p>Масса: {product.weight} кг</p>
						<p>Количество: {product.quantity}</p>
						<p>Описание: {product.description}</p>
						<img src={product.image} alt={product.name} />
						<p>{product.isNew ? 'Новинка' : ''}</p>
						<button onClick={() => onAddToCart(product)}>
							Добавить в корзину
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
