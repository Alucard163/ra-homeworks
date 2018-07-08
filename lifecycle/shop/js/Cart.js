class Cart extends React.Component {

  constructor(props) {
    super(props);

    this.state = props;
  }

  componentWillReceiveProps(nextProps) {
    if ((!nextProps.isOpen || nextProps.items.length === this.state.items.length) && nextProps.isOpen === this.state.isOpen) {
      return;
    }

    this.setState(nextProps);
  }

  render() {
    return (
      <CartView {...this.state} />
    );
  }

}
