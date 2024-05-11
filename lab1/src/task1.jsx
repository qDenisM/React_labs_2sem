import React from 'react'

const Task1 = () => {
	let date = new Date().toLocaleDateString()
	return (
		<div>
			<h1>Hello, World!</h1>
			<p>{date}</p>
		</div>
	)
}

export default Task1