import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function OrderPage2() {
	const cart = useSelector(state => state.cart)
	const [deliveryMethod, setDeliveryMethod] = useState('')
	const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)
  const totalWeight = cart.reduce(
		(total, item) => total + item.weight * item.quantity,
		0
	)
	let deliveryCost = 0

	const handleDeliveryMethodChange = event => {
		setDeliveryMethod(event.target.value)
	}

  const handlePaymentMethodChange = event => {
		setPaymentMethod(event.target.value)
	}

	if (deliveryMethod === 'courier') {
		deliveryCost = totalPrice < 200 ? 10 : 0
	} else if (deliveryMethod === 'post') {
		deliveryCost = 5 * totalWeight
	}

	return (
		<div className='delivery'>
			<h2>Доставка</h2>
			<label>
				<input
					type='radio'
					value='courier'
					checked={deliveryMethod === 'courier'}
					onChange={handleDeliveryMethodChange}
				/>
				Курьером
			</label>
			<label>
				<input
					type='radio'
					value='post'
					checked={deliveryMethod === 'post'}
					onChange={handleDeliveryMethodChange}
				/>
				Почтой
			</label>
			<label>
				<input
					type='radio'
					value='pickup'
					checked={deliveryMethod === 'pickup'}
					onChange={handleDeliveryMethodChange}
				/>
				Самовывоз
			</label>
			{deliveryMethod !== 'pickup' && (
				<input
					type='text'
					placeholder='Адрес доставки'
					value={address}
					onChange={e => setAddress(e.target.value)}
				/>
			)}
			{deliveryCost > 0 && (
				<div>
					<h2>Оплата</h2>
					<label>
						<input
							type='radio'
							value='cash'
							checked={paymentMethod === 'cash'}
							onChange={handlePaymentMethodChange}
						/>
						Наличными
					</label>
					<label>
						<input
							type='radio'
							value='card'
							checked={paymentMethod === 'card'}
							onChange={handlePaymentMethodChange}
						/>
						Банковской картой
					</label>
					<label>
						<input
							type='radio'
							value='transfer'
							checked={paymentMethod === 'transfer'}
							onChange={handlePaymentMethodChange}
						/>
						Банковским переводом
					</label>
				</div>
			)}
			<h3>Стоимость доставки: {deliveryCost} рублей</h3>
		</div>
	)
}
