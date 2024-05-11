import React, { useState } from 'react'

export default function EmailForm() {
	const [email, setEmail] = useState('')
	const [isValid, setIsValid] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = event => {
		const value = event.target.value
		setEmail(value)

		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

		setIsValid(emailPattern.test(value))
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (isValid && isSubmitted) {
			alert('Email валидный')
		} else {
			alert('Email невалидный')
		}
		setIsSubmitted(true)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='email' value={email} onChange={handleChange} />
				<input type='submit' />
			</form>
		</div>
	)
}
