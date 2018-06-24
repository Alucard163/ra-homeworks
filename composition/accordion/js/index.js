'use strict';

const content = [
	{
		title: 'Компоненты',
		article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
	},
	{
		title: 'Выучил раз, используй везде!',
		article:'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
	},
	{
		title: 'Использование JSX',
		article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
	}

];

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: []
		});
	}

	componentDidMount() {
		const contentLength = 6; //кол-во блоков

		let data = new Array(contentLength).fill(0);
		data = data.map((item, itemIndex) => content[itemIndex]);

		this.setState({data});
	}

	render () {
		const {data} = this.state;
		return (
			<main className="main">
				<Title> React </Title>
	
				{ data.map((item, itemIndex) => {
					if (!item) return; // не выводим пустые блоки 
    	    return (
      	 		<Section key={itemIndex}>{item}</Section>
        	);
   			}) }
			</main>
		);
	}
}

class Section extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			open: false
		}
	}

	render() {
		const toggleOpen = () => {
			this.setState({
				open: !this.state.open
			});
		}

		const SectionHead = (props) => {
			return (
				<h3 className="sectionhead" onClick={() => toggleOpen()}>{props.children}</h3>
			);
		}

		const ArticleWrap = (props) => {
			return (
				<div className="articlewrap">
					<div className="article">
						{props.children}
					</div>
				</div>
			);
		}

		return (
			<section className={`section ${this.state.open ? "open" : ""}`}>
				<button  onClick={() => toggleOpen()}>toggle</button>
				<SectionHead>{this.props.children.title}</SectionHead>
				<ArticleWrap>{this.props.children.article}</ArticleWrap>
			</section>	
		);
	}
}


const Title = (props) => {
	return (
		<h2 className="title">{props.children}</h2>
	);
}