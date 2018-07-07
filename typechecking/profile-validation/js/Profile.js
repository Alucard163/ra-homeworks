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

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  img: './images/profile.jpg'
};

Profile.propTypes = {
  url: (props, propName, componentName) => {
    if (!/^https\:\/\/vk\.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'https://vk.com/id1234'. Validation failed.`);
    }
  },
  birthday: (props, propName, componentName) => {
    if (!/^[12][90]\d{2}\-[01]\d\-[0-3]\d$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed. Got ${props[propName]}`);
    }
    if (new Date(props[propName]).getTime() > new Date().getTime()) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. The date must be less than the current date. Validation failed. Got ${props[propName]}`);
    }
  }
};