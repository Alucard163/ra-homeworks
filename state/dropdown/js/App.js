class App extends React.Component {
	constructor(props) {
		super(props);
		this.options = [];
		this.state = {
			active: this.props.options[0],
			open: false
		}

	}

	render() {

	const handleChange = (option) => {
		this.setState({
			active: option
		});
	};
	
	const toggleOpen = () => {
		this.setState({
			open: !this.state.open
		});
	}
		return (
			<div className="container">
				<div className={`dropdown-wrapper ${this.state.open ? "open" : ""}`} >
					<button className={"btn"} onClick={() => toggleOpen()} >
						<span>Account Settings</span>
						<i className="material-icons">public</i>
					</button>
					<ul className="dropdown">
						{this.props.options.map((option, i) => (
							<li
								className={option === this.state.active ? "active" : ""}
								onClick={() => handleChange(option)} >
									<a href="#">{option}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
		
	}
}
