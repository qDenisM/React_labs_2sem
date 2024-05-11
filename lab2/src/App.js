import React from 'react'
import { useState } from 'react'
import Clock from './Clock'
import JobMenu from './JobMenu'

function App() {
	const [profession, setProfession] = useState()

	const handleProfessionChange = event => {
		const selectedValue = event.target.value
		setProfession(selectedValue)
	}

	return (
		<div className='flex'>
			<div>
				<h4>Гренландия UTC+0</h4>
				<Clock format='24' timezone='0'></Clock>
				<h4>Беларусь UTC+3</h4>
				<Clock format='24' timezone='+3'></Clock>
				<h4>Нью-Йорк UTC-4</h4>
				<Clock format='12' timezone='-4'></Clock>
			</div>

			<div>
				<h2>Выберите профессию:</h2>
				<form>
					<ul>
						<li>
							<label>
								<input
									type='checkbox'
									value='developer'
									checked={profession === 'developer'}
									onChange={handleProfessionChange}
								/>
								Разработчик
							</label>
						</li>
						<li>
							<label>
								<input
									type='checkbox'
									value='builder'
									checked={profession === 'builder'}
									onChange={handleProfessionChange}
								/>
								Строитель
							</label>
						</li>
						<li>
							<label>
								<input
									type='checkbox'
									value='teacher'
									checked={profession === 'teacher'}
									onChange={handleProfessionChange}
								/>
								Учитель
							</label>
						</li>
						<li>
							<label>
								<input
									type='checkbox'
									value='racer'
									checked={profession === 'racer'}
									onChange={handleProfessionChange}
								/>
								Гонщик
							</label>
						</li>
						<li>
							<label>
								<input
									type='checkbox'
									value='butterfly'
									checked={profession === 'butterfly'}
									onChange={handleProfessionChange}
								/>
								Лепидоптеролог
							</label>
						</li>
					</ul>
				</form>
				<JobMenu profession={profession} />
			</div>
		</div>
	)
}

export default App