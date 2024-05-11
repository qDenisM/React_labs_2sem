import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Task1 from './task1'
import Task2 from './task2'
import Task3 from './task3'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<div>
			<Task1></Task1>
			<Task2></Task2>
			<Task3></Task3>
		</div>
	</React.StrictMode>
)
