'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			view: VIEW_MODULE,
			toggleLayout: true
		};
	}

	render() {

		const setViewState = () => {
			this.state.view === VIEW_LIST ? this.setState({ view: VIEW_MODULE, toggleLayout: true}) :  this.setState({ view: VIEW_LIST, toggleLayout: false })
		};
		
		return (
			<div>
				<div className="toolbar">
					<IconSwitch
						icon={this.state.view}
						onSwitch={() => setViewState() } />
				</div>
					{this.renderLayout(this.state.toggleLayout)}
			</div>
		);
	}

	renderLayout(cardView) {
		if (cardView) {
			return (
				<CardsView
					layout={this.props.layout}
					cards={this.getShopItems(this.props.products, cardView)} />
			);
		}
		
		return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
	}

	getShopItems(products, cardView) {
		return products.map(product => {
			let cardProps = {
				title: product.name,
				caption: product.color,
				img: product.img,
				price: `$${product.price}`
			};
			if (cardView) {
				return (
					<ShopCard {...cardProps}/>
				);
			}
			return (<ShopItem {...cardProps}/>)
		});
	}
}