import React, { useState } from 'react'

const Comments = () => {
	const [comments, setComments] = useState([])
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [text, setText] = useState('')
	const [secretWord, setSecretWord] = useState('')
	const [avatar, setAvatar] = useState(null)
	const [editingCommentId, setEditingCommentId] = useState(null)
	const [editedText, setEditedText] = useState('')
	const [error, setError] = useState('')

	const addComment = () => {
		if (username && email && text && secretWord && avatar) {
			if (!validateEmail(email)) {
				setError('Введите корректный адрес почты.')
				return
			}
			const newComment = {
				id: Date.now(),
				username,
				email,
				text,
				secretWord,
				avatar,
				createdAt: new Date().toLocaleString(),
				updatedAt: null,
			}
			setComments([...comments, newComment])
			setUsername('')
			setEmail('')
			setText('')
			setSecretWord('')
			setAvatar(null)
			setError('')
		} else {
			setError('Заполните все поля')
		}
	}

	const editComment = id => {
		const updatedComments = comments.map(comment =>
			comment.id === id
				? {
						...comment,
						text: editedText,
						updatedAt: new Date().toLocaleString(),
				  }
				: comment
		)
		setComments(updatedComments)
		setEditingCommentId(null)
		setEditedText('')
	}

	const deleteComment = (id, commentSecretWord) => {
		const confirmation = window.prompt('Введите секретное слово:')
		if (confirmation === commentSecretWord) {
			const updatedComments = comments.filter(comment => comment.id !== id)
			setComments(updatedComments)
		} else {
			alert('Секретное слово неправильное!')
		}
	}

	const viewCommentInfo = id => {
		const comment = comments.find(comment => comment.id === id)
		if (comment) {
			alert(`
        Имя: ${comment.username}
        Email: ${comment.email}
        Создано: ${comment.createdAt}
        Изменено: ${comment.updatedAt || 'Не был'}
      `)
		}
	}

	const handleFileChange = e => {
		const file = e.target.files[0]
		if (file && file.size > 1024 * 1024) {
			setError('Размер файла не должен превышать 1024x1024')
			return
		}
		const reader = new FileReader()
		reader.onloadend = () => {
			setAvatar(reader.result)
		}
		if (file) {
			reader.readAsDataURL(file)
		}
	}

	const validateEmail = email => {
		const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
		return re.test(email)
	}

	return (
		<div>
			<h1>Комментарии</h1>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<div className='enter-container'>
				<input
					type='text'
					placeholder='Имя'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<textarea
					placeholder='Комментарий'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Секретное слово'
					value={secretWord}
					onChange={e => setSecretWord(e.target.value)}
				/>
				<input type='file' accept='image/*' onChange={handleFileChange} />
				<button onClick={addComment}>Добавить комментарий</button>
			</div>
			<div className='comments-container'>
				{comments.map(comment => (
					<div className='comment' key={comment.id}>
						{comment.avatar && <img src={comment.avatar} alt='Avatar' />}
						<p>{comment.username}</p>
						{editingCommentId === comment.id ? (
							<div>
								<textarea
									value={editedText}
									onChange={e => setEditedText(e.target.value)}
								/>
								<button onClick={() => editComment(comment.id)}>Сохранить</button>
							</div>
						) : (
							<p>{comment.text}</p>
						)}
						<button onClick={() => setEditingCommentId(comment.id)}>
							Изменить
						</button>
						<button
							onClick={() => deleteComment(comment.id, comment.secretWord)}
						>
							Удалить
						</button>
						<button onClick={() => viewCommentInfo(comment.id)}>Информация</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Comments
