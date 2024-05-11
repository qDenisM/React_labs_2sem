import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage } from './redux/actions'
import OrderPage1 from './OrderPage1'
import OrderPage2 from './OrderPage2'

export default function OrderForm() {
	const currentPage = useSelector(state => state.currentPage)
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)

	const handleNextPage = () => {
		dispatch(nextPage())
	}

	const handlePrevPage = () => {
		dispatch(prevPage())
	}

	return (
		<div>
			{currentPage === 1 && <OrderPage1 />}
			{currentPage === 2 && <OrderPage2 />}
			{cart.length > 0 ? (
				<div className='buttons'>
					{(currentPage === 1 ||
						currentPage === 2) && (
							<button onClick={handleNextPage}>Далее</button>
						)}
					{currentPage === 2 && <button onClick={handlePrevPage}>Назад</button>}
				</div>
			) : (
				''
			)}
		</div>
	)
}
