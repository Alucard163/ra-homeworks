'use strict'

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			filters: 'All'
		};
	}

render() {
	const initFilter = (filter) => {
		this.setState({
			filters: filter
		});
	};

	const getProjects = (projects, filter) => {
		if (filter === 'All' ) return projects;
		let filteredProjects = [];
		projects.map((project, i) => {
			project.category === filter ? filteredProjects.push(project) : '';
		})

	return filteredProjects;
};

return (
	 <div>
    <Toolbar
      filters={this.props.filters}
      selected={this.state.filters}
      onSelectFilter={ (filter) => initFilter(filter) } />
    <Portfolio projects={getProjects(this.props.projects, this.state.filters)} />
  </div>

);
}

}
