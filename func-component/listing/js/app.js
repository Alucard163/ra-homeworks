'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
	.then(res => {
		if (200 <= res.status && res.status < 300) { return res; }
		throw new Error(res.statusText);
	})
	.then(res => res.json())
	.then(res => {
		document.querySelector('.loading').style.display = 'none';
		return res;
	})
	.then(res => {
		ReactDOM.render(
			<Listing items={res} />,
			document.getElementById('root')
		);
	})
	.catch(err => console.log(err));

function Listing({ items }) {
	function itemTitle(title) {
		if (title.length > 50) {
			return title.slice(0, 50) + '...';
		}
		return title;
	}

	function itemPrice(price, currency) {
		if (currency === 'USD') return `$${price}`;
		if (currency === 'EUR') return `€${price}`;
		return `${price} ${currency}`;
	}

	function itemQuantityLevel(quantity) {
		if (quantity <= 10) return 'level-low';
		if (quantity <= 20) return 'level-medium';
		return 'level-high';
	}
	
	if (!items.length) return null;

	const itemList = items.map(item => {
		return (
			<div key={item.listing_id} className="item">
				<div className="item-image">
					<a href={item.url}>
						<img src={item.MainImage.url_570xN} />
					</a>
				</div>
				<div className="item-details">
					<p className="item-title">{itemTitle(item.title)}</p>
					<p className="item-price">{itemPrice(item.price, item.currency_code)}</p>
					<p className={`item-quantity ${itemQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
				</div>
			</div>
		);
	});

	return (<div className="item-list">{itemList}</div>);
}