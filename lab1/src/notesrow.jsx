import React from 'react'
export default function NotesRow() {
	const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

	return (
		<>
			<td></td>
			{letters.map(el => (
				<td style={{ 
					border: '0px solid black',
					textIndent: '15px'
				 }}>
					<span
						style={{
							color: '#e58800',
						}}
					>
						{el}
					</span>
				</td>
			))}
			<td></td>
		</>
	)
}
