import { Component } from 'react'

class Clock extends Component {
	constructor(props) {
		super(props)
		this.state = { currentTime: this.getCurrentTime() }
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 500)
	}

	tick() {
		this.setState({
			currentTime: this.getCurrentTime(),
		})
	}

	addLeadingZero(value) {
		return value < 10 ? '0' + value : value
	}

	getCurrentTime() {
		const { timezone, format } = this.props
		const date = new Date()

		let hours = date.getUTCHours() + parseInt(timezone)
		let minutes = date.getUTCMinutes()
		let seconds = date.getUTCSeconds()

		if (format === '12') {
			const ampm = hours >= 12 ? 'PM' : 'AM'
			hours = hours % 12 || 12
			return `${hours}:${this.addLeadingZero(minutes)}:${this.addLeadingZero(
				seconds
			)} ${ampm}`
		} else {
			return `${hours}:${this.addLeadingZero(minutes)}:${this.addLeadingZero(
				seconds
			)}`
		}
	}

	render() {
		const { currentTime } = this.state
		return <p>Текущая дата и время: {currentTime}</p>
	}
}

export default Clock
