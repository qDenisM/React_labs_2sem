import React, { useState, useEffect } from 'react'

export default function ColorPicker() {
	const [selectedColor, setSelectedColor] = useState('#ffffff')
	const [savedColors, setSavedColors] = useState([])

	useEffect(() => {
		const savedColorsString = localStorage.getItem('savedColors')
		if (savedColorsString) {
			setSavedColors(JSON.parse(savedColorsString))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('savedColors', JSON.stringify(savedColors))
	}, [savedColors])

	const handleColorChange = color => {
		setSelectedColor(color)
	}

	const handleSaveColor = () => {
		setSavedColors([...savedColors, selectedColor])
	}

	const handleResetColor = () => {
		setSelectedColor('#fff')
	}

	return (
		<div className='container'>
			<div>
				Выбранный цвет:{' '}
				<span style={{ backgroundColor: selectedColor,
          color: 'white',
					display: 'inline-block',
					width: '89%'
         }}>{selectedColor}</span>
			</div>
			<div>
				<button onClick={handleSaveColor}>Сохранить</button>
				<button onClick={handleResetColor}>Сбросить</button>
			</div>
			<div>
      <p style={{

        display: 'inline'
      }}>Сохраненные цвета: </p>
				{savedColors.map((color, index) => (
					<div
						key={index}
						style={{
							backgroundColor: color,
              position: 'relative',
              top: '5px',
							width: '20px',
							height: '20px',
							display: 'inline-block',
							margin: '0 5px',
							border: '1px solid #000',
						}}
					></div>
				))}
			</div>
			<div>
				{['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'].map(
					(color, index) => (
						<div
							key={index}
							onClick={() => handleColorChange(color)}
							style={{
								backgroundColor: color,
								width: '20px',
								height: '20px',
								display: 'inline-block',
								margin: '20px 5px',
								cursor: 'pointer',
								border: '1px solid #000',
							}}
						></div>
					)
				)}
			</div>
		</div>
	)
}
