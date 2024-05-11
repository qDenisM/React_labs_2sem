import { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoItems from './ToDoItems'

export default function ToDoList() {
	const [items, setItems] = useState([])
	const [filter, setFilter] = useState('all')

	const handleAddItem = item => {
		// Обновляем состояние items, добавляя новый элемент в массив
		setItems(prevItems => [...prevItems, item])
	}

	const onCheckboxChange = clickedItem => {
		// Обновляем состояние items, инвертируя состояние флажка для выбранного элемента
		setItems(prevItems =>
			prevItems.map(item =>
				item.id === clickedItem.id ? { ...item, checked: !item.checked } : item
			)
		)
	}

	// Фильтруем элементы списка в соответствии с выбранной категорией
	const filteredItems = items.filter(item => {
		if (filter === 'completed') {
			return item.checked
		} else if (filter === 'uncompleted') {
			return !item.checked
		}
		return true
	})

	// Возвращаем разметку компонента ToDoList
	return (
		<>
			{/* Компонент ToDoForm для добавления новых элементов */}
			<ToDoForm onAddItem={handleAddItem} />

			{/* Кнопки для фильтрации элементов списка */}
			<div>
				<button onClick={() => setFilter('all')}>All</button>
				<button onClick={() => setFilter('completed')}>Completed</button>
				<button onClick={() => setFilter('uncompleted')}>Uncompleted</button>
			</div>

			{/* Таблица для отображения элементов списка */}
			<table>
				<tbody>
					{/* Отображаем отфильтрованные элементы списка */}
					{filteredItems.map(item => (
						<ToDoItems
							key={item.id}
							item={item}
							onCheckboxChange={() => onCheckboxChange(item)}
						/>
					))}
				</tbody>
			</table>
		</>
	)
}
