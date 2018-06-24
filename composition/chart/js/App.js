function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
	return a - b;
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

		let data = new Array(series).fill(new Array(serieLength).fill(0));
		data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

		const newProps = Object.assign({}, this.state);

		return (
			<section>
				<Charts>
					{ data.map((serie, serieIndex) => {
						let sortedSerie = serie.slice(0),
								sum;

						sum = serie.reduce((carry, current) => carry + current, 0);
						sortedSerie.sort(compareNumbers);

						return (
							<ChartsSerie 
								{...newProps}  
								className={"Charts--serie"}
								serieIndex={serieIndex}
								height={250}
							>
								<Label type={labels} serieIndex={serieIndex} />
				
								{ serie.map((item, itemIndex) => {
									let color = colors[itemIndex], style,
											size = item / (max) * 100;

									style = {
										backgroundColor: color,
										opacity: item/max + .05,
										zIndex: item,
										height: size + '%'
									};
	
									return (
										<ChartsItem 
											{...newProps}
											className={"Charts--item"}
											style={style}
											itemIndex={itemIndex}
											item={item}
										/>
									);
								}) }
							</ChartsSerie>
						);
					}) }
				</Charts>
				<Charts>
					{ data.map((serie, serieIndex) => {
						let sortedSerie = serie.slice(0),
								sum;

						sum = serie.reduce((carry, current) => carry + current, 0);
						sortedSerie.sort(compareNumbers);

						return (
							<ChartsSerie 
								{...newProps}  
								className={"Charts--serie stacked"}
								serieIndex={serieIndex}
								height={250}
							>
								<Label {...newProps} type={labels} serieIndex={serieIndex} />
							
								{ serie.map((item, itemIndex) => {
									let color = colors[itemIndex], style,
											size = item / sum * 100;

									style = {
										backgroundColor: color,
										opacity: 1,
										zIndex: item,
										height: size + '%'
									};
	
									return (
									  <ChartsItem 
									  	{...newProps}
											className={"Charts--item stacked"}
											style={style}
											itemIndex={itemIndex}
											item={item}
										/>
									);
								}) }
							</ChartsSerie>
						);
					}) }
				</Charts>
				<Charts>
					{ data.map((serie, serieIndex) => {
						let sortedSerie = serie.slice(0),
								sum;

						sum = serie.reduce((carry, current) => carry + current, 0);
						sortedSerie.sort(compareNumbers);

						return (
							<ChartsSerie 
								{...newProps} 
								className={"Charts--serie layered"}
								serieIndex={serieIndex}
								height={250}
							>
								<Label type={labels} serieIndex={serieIndex} />

								{ serie.map((item, itemIndex) => {
									let color = colors[itemIndex], style,
											size = item / (max) * 100;

									style = {
										backgroundColor: color,
										opacity: (item/max + .05),
										zIndex: item,
										height: size + '%',
										right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
									};

									return (
										<ChartsItem 
											{...newProps}
											className={"Charts--item layered"}
											style={style}
											itemIndex={itemIndex}
											item={item}
										/>
									);
								}) }
							</ChartsSerie>
						);
					}) }
				</Charts>
				<Charts horizontal>
					{ data.map((serie, serieIndex) => {
						let sortedSerie = serie.slice(0),
								sum;

						sum = serie.reduce((carry, current) => carry + current, 0);
						sortedSerie.sort(compareNumbers);

						return (
							<ChartsSerie 
								{...newProps}
								className={"Charts--serie"}
								serieIndex={serieIndex}
								height={'auto'}
							>
								<Label type={series} serieIndex={serieIndex} />

								{ serie.map((item, itemIndex) => {
									let color = colors[itemIndex], style,
											size = item / (max) * 100;

									style = {
										backgroundColor: color,
										opacity: (item/max + .05),
										zIndex: item,
										width: size + '%'
									};


									return (
										<ChartsItem 
											{...newProps}
											className={"Charts--item"}
											style={style}
											itemIndex={itemIndex}
											item={item}
										/>
									);
								}) }
							</ChartsSerie>
						);
					}) }
				</Charts>
				<Legend>
					{ labels.map((label, labelIndex) => {
						return(
							<LegendItem {...newProps} labelIndex={labelIndex} label={label} />
						)
					}) }
				</Legend>
			</section>
		);
	}
}

const Charts = (props) => {
	return (
		<div className={props.horizontal ? "Charts horizontal" : "Charts"}>
			{props.children}
		</div>
	)
}

const ChartsSerie = (props) => {
	const {className, serieIndex, height} = props;
	return (
		<div 
			className={className}
			key={serieIndex}
			style={{height: height}}
		>
			{props.children}
		</div>
	)
}

const Label = ({ type, serieIndex }) => {
	return (
		<label>{type[serieIndex]}</label>
	)
}

const ChartsItem = ({ className, style, itemIndex, color, item }) => {
	return (
		<div 
			className={className} 
			style={style} 
			key={itemIndex}
		>
			<b style={{color: color}}>{item}</b>
		</div>
		)
}


const Legend = (props) => {
	return (
		<div className="Legend">
			{props.children}
		</div>
	)
}

const LegendItem = ({ colors, labelIndex, label }) => {
	return (
		<div>
			<span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}} />
			<span className="Legend--label">{label}</span>
		</div>
	);
}