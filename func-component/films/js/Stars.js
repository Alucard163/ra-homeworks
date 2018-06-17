'use strict';

function Stars({count}) {
  return <ul className="card-body-stars u-clearfix">{ count >= 1 && count <=5 &&  typeof count === 'number' && CalcStars(count) }</ul>;
}

Stars.defaultProps = { stars: 0 }; 

function CalcStars(count) {
	let i = 0;
	let listStars = [];
	while (i != count) {
		listStars.push(<li><Star /></li>)
		i++
	}
	
	return listStars;
}