import React from 'react'
import NotesRow from './notesrow'

const arr = ['', '', '', '', '', '', '', '']

const Task3 = () => {
	return (
		<table style={{borderCollapse: 'collapse'}}>
			<NotesRow></NotesRow>
			{arr.map((_, i) => (
				<tr>
					<td style={{ border: '0px solid black' }}>
						<span
							style={{
								color: '#e58800',
								paddingRight: '5px',
								paddingLeft: '5px',
							}}
						>
							{8 - i}
						</span>
					</td>
					{arr.map((_, j) => (
						<td
							style={{
								background: i % 2 === j % 2 ? '#f2c37f' : '#e58800',
								color: i % 2 === j % 2 ? '#f2c37f' : '#e58800',
								padding: '10px 25px 25px 10px',
							}}
						></td>
					))}
					<td style={{ border: '0px solid black' }}>
						<span
							style={{
								color: '#e58800',
								paddingRight: '5px',
								paddingLeft: '5px',
							}}
						>
							{8 - i}
						</span>
					</td>
				</tr>
			))}
			<NotesRow></NotesRow>
		</table>
	)
}

export default Task3
