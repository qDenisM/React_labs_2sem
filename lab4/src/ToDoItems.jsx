export default function ToDoItems({ item, onCheckboxChange }) {
	// Деструктурируем свойства объекта item: id, name, checked
	const { name, checked } = item

	// Обработчик события изменения состояния флажка
	const handleCheckboxChange = () => {
		onCheckboxChange(item)
	}

	return (
		<tr>
			<td>{name}</td>
			{/* Создаем флажок для отметки выполненного дела */}
			<td>
				<input
					type='checkbox'
					checked={checked}
					onChange={handleCheckboxChange}
				/>
			</td>
		</tr>
	)
}
