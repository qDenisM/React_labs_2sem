import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Catalog from './Catalog'
import OrderForm from './OrderForm'
import initialProducts from './db'
import { addToCart } from './redux/actions'

function App() {
	const handleAddToCart = product => {
		store.dispatch(addToCart(product))
	}

	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<nav>
						<ul>
							<li>
								<Link to='/'>Каталог</Link>
							</li>
							<li>
								<Link to='/basket'>Корзина</Link>
							</li>
						</ul>
					</nav>

					<Routes>
						<Route
							path='/'
							element={
								<Catalog
									products={initialProducts}
									onAddToCart={handleAddToCart}
								/>
							}
						/>
						<Route path='/basket' element={<OrderForm />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	)
}

export default App
