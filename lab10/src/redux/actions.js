export const nextPage = () => ({
	type: 'NEXT_PAGE',
})

export const prevPage = () => ({
	type: 'PREV_PAGE',
})

export const addToCart = product => ({
	type: 'ADD_TO_CART',
	payload: { product },
})

export const removeFromCart = productId => ({
	type: 'REMOVE_FROM_CART',
	payload: { productId },
})

export const setDeliveryMethod = method => ({
	type: 'SET_DELIVERY_METHOD',
	payload: { method },
})

export const setQuantity = (productId, quantity, stock) => ({
	type: 'SET_QUANTITY',
	payload: { productId, quantity, stock },
})

export const setAddress = address => ({
	type: 'SET_ADDRESS',
	payload: { address },
})

export const setPaymentMethod = method => ({
	type: 'SET_PAYMENT_METHOD',
	payload: { method },
})
