'use strict';

const profileStyle = {
	border: '1px solid #cccccc',
	borderRadius: '5px',
	width: '100%',
	height: '100%',
	margin: '5px'
};

const imageStyle = {
	width: '200px',
	height: '200px'
};

class Profile extends React.Component {
	constructor(props){
		super(props);
	}

	static get propTypes() {
		return {
			img: PropTypes.string,
			birthday:birthdayProfilePropType,
			first_name: PropTypes.string.isRequired,
			last_name: PropTypes.string.isRequired,
			url: urlPropTypeChecker.isRequired
		};
	}

	static get defaultProps() {
		return {
			img: './images/profile.jpg',
			birthday: '1970-01-01'
		};
	} 

	render() {
		return (
			<div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
				<div style={profileStyle}>
					<h2>{this.props.first_name} {this.props.last_name}</h2>
					<div>
						<img src={this.props.img} className="img-thumbnail" style={imageStyle}/>
					</div>
					<p>vk: <a href={this.props.url}>{this.props.url}</a></p>
					<p>birthday: <a href={this.props.birthday}>{this.props.birthday}</a></p>
				</div>
			</div>
		);
	}
}

const birthdayProfilePropType = (props, propName, componentName)  => {
	const birthday = props[propName];
	const chekBirthday = new Date(birthday) > new Date();
	const isBirthday = (typeof birthday === 'string') &&  /^\d{4}\-\d{2}\-\d{2}$/.test(birthday);
 
	if (!isBirthday) {
			return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
	};

	if (chekBirthday) {
		return new Error(`Дата рождения еще не наступила`);
	}
	return null; 
};

const urlProfilePropType = (props, propName, componentName)  => {
	const url = props[propName];
	const isUrl = (typeof url === 'string') &&  /^(https:\/\/vk\.com\/)(\(id[0-9]+|[A-Za-z0-9_-]+)/g.test(url);

	if (!isUrl) {
			return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`);
	};
		return null; 
	}

const urlPropTypeChecker = createChainableTypeChecker(urlProfilePropType);

function createChainableTypeChecker (validate) {
	const checkType = (isRequired, props, propName, componentName, ...rest) => {
		if (props[propName] === null) {
			if (isRequired) {
				return new Error(`Обязательный атрибут ${propName} не был передан компоненту ${componentName}`);
			}
			return null;
		} else {
			return validate(props, propName, componentName);
		}
	}
	let chainedCheckType = checkType.bind(null, false);
	chainedCheckType.isRequired = checkType.bind(null, true);
	return chainedCheckType;
};