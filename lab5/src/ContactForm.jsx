import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function ContactForm() {
	const [formDataList, setFormDataList] = useState([])

	const validate = values => {
		const errors = {}
		if (!values.name) {
			errors.name = 'Обязательно для ввода'
		} else if (!/^[a-zA-Zа-яА-Я]+$/.test(values.name)) {
			errors.name = 'Неверно введено'
		}
		if (!values.email) {
			errors.email = 'Обязательно для ввода'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Неверно введено'
		}
		if (!values.message) {
			errors.message = 'Обязательно для ввода'
		}
		if (!values.gender) {
			errors.gender = 'Обязательно для ввода'
		}
		return errors
	}

	const handleSubmit = (values, { resetForm }) => {
		const newFormDataList = [...formDataList, values]
		setFormDataList(newFormDataList)
		resetForm()
	}

	return (
		<>
			<Formik
				initialValues={{ name: '', email: '', message: '', gender: '' }}
				validate={validate}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form>
						<div>
							<label htmlFor='name'>Имя: </label>
							<Field type='text' id='name' name='name' />
							<ErrorMessage name='name' component='div' />
						</div>
						<div>
							<label htmlFor='email'>Email: </label>
							<Field type='email' id='email' name='email' />
							<ErrorMessage name='email' component='div' />
						</div>
						<div>
							<label htmlFor='message'>Сообщение: </label>
							<Field as='textarea' id='message' name='message' />
							<ErrorMessage name='message' component='div' />
						</div>
						<div>
							<label>Пол: </label>
							<div>
								<label>
									<Field type='radio' name='gender' value='Мужской' />
									Мужской
								</label>
								<label>
									<Field type='radio' name='gender' value='Женский' />
									Женский
								</label>
								<label>
									<Field type='radio' name='gender' value='Другой' />
									Другой
								</label>
							</div>
							<ErrorMessage name='gender' component='div' />
						</div>
						<button type='submit'>Отправить</button>
					</Form>
				)}
			</Formik>
			<table>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Email</th>
						<th>Сообщение</th>
						<th>Пол</th>
					</tr>
				</thead>
				<tbody>
					{formDataList.map((formData, index) => (
						<tr key={index}>
							<td>{formData.name}</td>
							<td>{formData.email}</td>
							<td>{formData.message}</td>
							<td>{formData.gender}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}