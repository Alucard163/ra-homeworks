'use strict';

const RadioGroup = ({label, list, name, onChange, value}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div>
        {list.map((item, i) => (
          <div key={`${name}_${i}`} className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={name} onChange={onChange}
                   value={item} checked={item == value} id={`radio_${name}_${i}`}/>
            <label className="form-check-label" htmlFor={`radio_${name}_${i}`}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};