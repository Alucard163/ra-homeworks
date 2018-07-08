class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };

  }

  saveSearchBoxTopPosition = (el) => {
    this.topPosition = el.offsetTop;
  };

  render() {
    return <SearchBoxView fixed={this.state.fixed} saveSearchBoxTopPosition={this.saveSearchBoxTopPosition} />
  }

  isFixed = (offset) =>  {
    return offset > this.topPosition;
  };

  setPosition = (fixed) => {
    this.setState({
      fixed: fixed
    });
  };

  scrollHandler = () => {
    this.setPosition(this.isFixed(window.pageYOffset));
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }
}