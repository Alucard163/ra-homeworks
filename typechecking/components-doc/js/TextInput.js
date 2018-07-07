'use strict';

const TextInput = ({type, label, name, onChange, value, required}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" name={name} onChange={onChange}
             value={value} required={required}/>
    </div>
  )
};

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  required: PropTypes.bool
};