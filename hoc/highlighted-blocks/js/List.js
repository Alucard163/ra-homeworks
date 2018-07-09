'use strict';


function PopularFormatter(Component, className) {
  return class extends React.Component {
    render() {
      this.props.highlightClass = className;
      return <Component {...this.props} />;
    }
  }
}

const List = props => {
    return props.list.map(item => {
        let Component;
        switch (item.type) {
            case 'video':
              Component = Video;
              break;
            case 'article':
              Component = Article;
              break;
        }

        if (item.views > 1000) {
          Component = PopularFormatter(Component, 'item-popular');
        } else if (item.views < 100) {
          Component = PopularFormatter(Component, 'item-new');
        }

        return <Component {...item} />;
    });
};