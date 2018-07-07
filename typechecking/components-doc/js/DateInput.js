'use strict';

const DateInput = ({label, name, onChange, value, required}) => {
  console.log(value);
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" className="form-control" name={name} onChange={onChange}
             value={value} required={required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.defaultProps = {
  value: new Date().toISOString().slice(0, 10)
};

DateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool
};