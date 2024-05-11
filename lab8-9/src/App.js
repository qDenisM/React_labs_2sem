import React from 'react'
import initialProducts from './db'
import Catalog from './Catalog'

export default function App() {
	return (
		<div>
			<Catalog products={initialProducts} />
		</div>
	)
}
