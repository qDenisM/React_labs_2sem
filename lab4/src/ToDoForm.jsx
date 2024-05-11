import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid' // Импортируем функцию генерации уникального идентификатора из библиотеки uuid

export default function ToDoForm({ onAddItem }) {
	const name = useRef('') // Создаём ссылку на изменяемое значение для поля ввода

	const add = e => {
		// Определяем функцию обработки события добавления элемента
		e.preventDefault()

		if (name.current.value) {
			const item = {
				// Создаём объект элемента списка дел
				id: uuidv4(),
				name: name.current.value, // Присваиваем значение поля ввода свойству name элемента
				checked: false,
			}

			onAddItem(item) // Вызываем функцию onAddItem, передавая ей созданный элемент списка дел
			name.current.value = ''
		} else {
			alert('Ошибка!')
		}
	}

	return (
		<>
			<form onSubmit={add}>
				<label htmlFor='name'>Название:</label>
				<input type='text' id='name' ref={name} />{' '}
				{/* Поле ввода с привязкой к useRef */}
				<button type='submit'>Добавить</button>
			</form>
		</>
	)
}
