const SearchBox = (props) => {
	
	const filter = event => {
		props.filterBooks(event.currentTarget.value);
	}
	
	return (
		<input 
			type="text" 
			placeholder="Поиск по названию или автору"
			onChange={filter}
			value={props.value}
		/>
	);
}

