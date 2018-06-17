const Calendar = function ({date}) {
	const month = upCaseFirst(date.toLocaleString('ru', { month: 'long'	})); 
	return (
		<div className="ui-datepicker">
			{ currDate(date) } 
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
				</div>
			</div>
			<table className="ui-datepicker-calendar">
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className="ui-datepicker-week-end" />
					<col className="ui-datepicker-week-end" />
				</colgroup>
				<thead>
					<tr>
						<th scope="col" title="Понедельник">Пн</th>
						<th scope="col" title="Вторник">Вт</th>
						<th scope="col" title="Среда">Ср</th>
						<th scope="col" title="Четверг">Чт</th>
						<th scope="col" title="Пятница">Пт</th>
						<th scope="col" title="Суббота">Сб</th>
						<th scope="col" title="Воскресенье">Вс</th>
					</tr>
				</thead>
				{ initCalendar(date) } 
			</table>
		</div>
	)
}

function currDate(date) {
	const month = 'Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Августа,Сентября,Октября,Ноября,Декабря'.split(','); 
	const weekday = upCaseFirst(date.toLocaleString('ru', { weekday: 'long'	})); 

	return (
		<div className="ui-datepicker-material-header">
			<div className="ui-datepicker-material-day">{weekday}</div>
			<div className="ui-datepicker-material-date">
				<div className="ui-datepicker-material-day-num">{date.getDate()}</div>
				<div className="ui-datepicker-material-month">{month[date.getMonth()]}</div> 
				<div className="ui-datepicker-material-year">{date.getFullYear()}</div>
			</div>
		</div>
	)
}

function initCalendar(date) {
	const arrOfDates = getDate(date);  
	
	const firstWeek = arrOfDates.map((item, index) => {
	
		if (index < 7) { 
			let config; 
			if (item > 1 && 7 < item ) { config = 'ui-datepicker-other-month'; } 
			if (item <= 7 && item == date.getDate()) {	config = 'ui-datepicker-today'; } 

			return (<td className={config} key={index}>{item}</td>	)
		}
	});

	const secondWeek = arrOfDates.map((item, index) => {
	
		if (index >= 7 && index < 14) {
			let config;
			if (item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	const thirdWeek = arrOfDates.map((item, index) => {
	
		if (index >= 14 && index < 21) {
			let config;
			if (item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	const fourthWeek = arrOfDates.map((item, index) => {
	
		if (index >= 21 && index < 28) {
			let config;
			if (item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	const fifthWeek = arrOfDates.map((item, index) => {
	
		if (index >= 28 && index < 35) {
			let config;
			if (item < 7) { config = 'ui-datepicker-other-month'; }
			if (item > 7 && item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	const sixthWeek = arrOfDates.map((item, index) => {
	
		if (index >= 35 && index < 42) {
			let config ='';
			if (item < 7) { config = 'ui-datepicker-other-month'; }
			if (item > 7 && item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

return (
	<tbody>
		<tr>	
			{firstWeek}
		</tr>
		<tr>	
			{secondWeek}
		</tr>
		<tr>	
			{thirdWeek}
		</tr>
		<tr>	
			{fourthWeek}
		</tr>
		<tr>	
			{fifthWeek}
		</tr>
		<tr>	
			{sixthWeek}
		</tr>
	</tbody>) 
}


function getDate(date) {
	const month = date.getMonth(); 
	const getMonthYear = new Date (date.getFullYear(), date.getMonth()); 
	const copyMonthYear = new Date (getMonthYear); 
	let arrayDate = [];
	let count = 1;

	for (let i = 0; i < getDay(getMonthYear); i++) { 
		arrayDate.push(copyMonthYear.getDate(copyMonthYear.setDate(copyMonthYear.getDate() - 1))); 
	}

	arrayDate.reverse() 

	while (getMonthYear.getMonth() == month) { 
		arrayDate.push(getMonthYear.getDate()); 
		getMonthYear.setDate(getMonthYear.getDate() + 1); 
	}

	while (arrayDate.length % 7 != 0) {
		arrayDate.push(count++); 
	}

	return arrayDate
}

function upCaseFirst(str) { 
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}

function getDay(date) { 
	let day = date.getDay();
	if (day == 0) { day = 7; }
	return day - 1;
}