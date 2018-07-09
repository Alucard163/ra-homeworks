'use strict';

const Article = props => {
    return (
        <div className={"item item-article " + props.highlightClass}>
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

Article.defaultProps = {
  highlightClass: ''
};