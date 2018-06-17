const Menu = function (props) {
	const {items, opened} = props;
	
	if (opened) {
		return (
			<div className="menu menu-open">
				<div className="menu-toggle"><span></span></div>
				<nav>
					<ul>
						{ items.map(MenuItem) }
					</ul>
				</nav>
			</div>
		);
	}

	return (
		<div className="menu">
			<div className="menu-toggle"><span></span></div>
		</div>
	);
}

function MenuItem(item) {
	return (
		<li><a href={item.href}>{item.title}</a></li>
	)
}