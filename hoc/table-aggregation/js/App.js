'use strict';

function GroupAdapter(Component, groupBy) {
  return class extends React.Component {
    render() {
      this.props.list = this.props.list.reduce(function(result, item) {
        const date = new Date(item.date);
        let number = (groupBy === 'month') ? date.getMonth() : date.getFullYear();

        if (!(number in result)) {
          result[number] = {"amount": 0};
          result[number][groupBy] = (groupBy === 'month') ?  date.toLocaleString('en-us', { month: "short" }) : date.getFullYear();
        }
        result[number].amount += item.amount;

        return result;
      }, []);

      return <Component {...this.props} />;
    }
  }
}

function SortAdapter(Component) {
  return class extends React.Component {
    render() {

      this.props.list.sort(function(a ,b) {
          return parseInt(a.date.replace('-', '').replace('-', '')) - parseInt(b.date.replace('-', '').replace('-', ''));
      });
      return <Component {...this.props} />;
    }
  }
}

const MonthTableGroup = GroupAdapter(MonthTable, 'month');
const YearTableGroup = GroupAdapter(YearTable, 'year');
const SortTableGroup = SortAdapter(SortTable);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <MonthTableGroup list={this.state.list} />
                <YearTableGroup list={this.state.list} />
                <SortTableGroup list={this.state.list} />
            </div>
        );
    }
};