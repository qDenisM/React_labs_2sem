import initialProducts from "../db"
const initialState = {
	currentPage: 1,
	cart: [],
	deliveryMethod: '',
	address: '',
	paymentMethod: '',
  products: initialProducts,
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NEXT_PAGE':
			return {
				...state,
				currentPage: state.currentPage + 1,
			}
		case 'PREV_PAGE':
			return {
				...state,
				currentPage: state.currentPage - 1,
			}
		case 'ADD_TO_CART':
			return {
				...state,

				cart: [
					...state.cart,
					{
						productId: action.payload.product.id,
						quantity: action.payload.product.quantity,
						weight: action.payload.product.weight,
						price: action.payload.product.price,
						productName: action.payload.product.name,
					},
				],
			}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter(
					item => item.productId !== action.payload.productId
				),
			}
		case 'SET_DELIVERY_METHOD':
			return {
				...state,
				deliveryMethod: action.payload.method,
			}
		case 'SET_ADDRESS':
			return {
				...state,
				address: action.payload.address,
			}
		case 'SET_PAYMENT_METHOD':
			return {
				...state,
				paymentMethod: action.payload.method,
			}
		case 'SET_QUANTITY':
			return {
				...state,
				cart: state.cart.map(item =>
					item.productId === action.payload.productId
						? {
								...item,
								quantity: action.payload.quantity,
								stock: action.payload.stock,
						  }
						: item
				),
			}
		default:
			return state
	}
}

export default rootReducer
