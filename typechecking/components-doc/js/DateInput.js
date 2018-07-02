'use strict';

const dateToday = () => {
  const date = new Date();
  const values = [date.getDate(), date.getMonth() + 1];
  const newValue = values.map((value, i) => 
    value.toString().replace(/^([0-9])$/g, '0$1'))
  return (`${date.getFullYear()}-${newValue[1]}-${newValue[0]}`); 
};

const dateInputPropType = (props, propName, componentName)  => {
  let date = props[propName];
  let isDate = (typeof date === 'string') &&	/^\d{4}\-\d{2}\-\d{2}$/.test(date);
 
  if (!isDate) {  
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
  };
     
   return null; 
};

class DateInput extends React.Component {
	constructor(props){
		super(props);
	}

	static get propTypes() {
		return {
			onChange:PropTypes.func,
			label:PropTypes.string,
			name:PropTypes.string,
			value:dateInputPropType,
			required:PropTypes.bool
		};
	}

	static get defaultProps() {
		return {
			value: dateToday()
		};
	}


	render() {

		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				<input type="text" className="form-control" name={this.props.name} onChange={this.props.onChange}
			 		value={this.props.value} required={this.props.required} placeholder="YYYY-MM-DD"/>
			</div>
		)
	}
}