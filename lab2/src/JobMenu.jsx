import React from 'react'

export default function JobMenu({ profession }) {
	function menu() {
		switch (profession) {
			case 'developer':
				return (
					<div>
						<h4>Разработчик</h4>
						<ol>
							<li>C</li>
							<li>Basic</li>
							<li>JavaScript</li>
							<li>C++</li>
							<li>C#</li>
							<li>Java</li>
							<li>Python</li>
						</ol>
					</div>
				)
			case 'builder':
				return (
					<div>
						<h4>Строитель</h4>
						<ol>
							<li>Камень</li>
							<li>Кирпич</li>
							<li>Кран</li>
							<li>Каска</li>
							<li>Здание</li>
							<li>Песок</li>
							<li>Дорога</li>
						</ol>
					</div>
				)
			case 'teacher':
				return (
					<div>
						<h4>Учитель</h4>
						<ol>
							<li>Алгебра</li>
							<li>История</li>
							<li>Информатика</li>
							<li>Иностранный язык</li>
							<li>Обществоведение</li>
							<li>Черчение</li>
							<li>Физика</li>
						</ol>
					</div>
				)
			case 'racer':
				return (
					<div>
						<h4>Гонщик</h4>
						<ol>
							<li>Нитро</li>
							<li>Форсаж 1</li>
							<li>Форсаж 2</li>
							<li>Форсаж 3</li>
							<li>Закись азота</li>
							<li>Need for Speed</li>
							<li>Автомобиль</li>
						</ol>
					</div>
				)
			case 'butterfly':
				return (
					<div>
						<h4>Лепидоптеролог</h4>
						<ol>
							<li>Крапивница</li>
							<li>Адмирал</li>
							<li>Голубянка</li>
							<li>Белянка</li>
							<li>Монарх</li>
							<li>Лимонница</li>
							<li>Капустница</li>
						</ol>
					</div>
				)
			default:
				return
		}
	}

	return <div>{menu()}</div>
}
