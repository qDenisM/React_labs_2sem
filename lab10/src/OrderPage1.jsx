import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, setQuantity } from './redux/actions'

export default function OrderPage1() {
	const cart = useSelector(state => state.cart)
	const products = useSelector(state => state.products)
	const dispatch = useDispatch()
  
	const handleRemoveFromCart = productId => {
		dispatch(removeFromCart(productId))
	}

	const handleQuantityChange = (productId, value) => {
		const quantity = parseInt(value, 10)
		const product = products.find(prod => prod.id === productId)
    if (!product) {
			return
		}
		if (quantity > product.stock) {
			alert(`На складе недостаточно товара "${product.name}"`)
			dispatch(setQuantity(productId, product.stock))
		} else {
			dispatch(setQuantity(productId, quantity))
		}
	}

	return (
		<div>
			<h1>Корзина</h1>
			{cart.length === 0 ? (
        <h3>Корзина пуста</h3>
      ) : (
			<div className='main-basket'>
				{cart.map(item => (
					<div className='basket-row' key={item.productId}>
						<p>{item.productName}</p>
						<p>
							Цена: {products.find(prod => prod.id === item.productId).price}
						</p>
						<p>Количество: {item.quantity}</p>
						<p>Масса: {item.weight} кг</p>
						<p>
							Общая стоимость:{' '}
							{products.find(prod => prod.id === item.productId).price *
								item.quantity}
						</p>
						<input
							type='number'
							value={item.quantity}
							min={1}
							max={products.find(prod => prod.id === item.productId).stock}
							onChange={e =>
								handleQuantityChange(item.productId, e.target.value)
							}
						/>
						<button onClick={() => handleRemoveFromCart(item.productId)}>
							Удалить
						</button>
					</div>
				))}
			</div>)}
		</div>
	)
}
