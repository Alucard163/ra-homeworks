'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function DateTimeFormatter(Component) {
    return class extends React.Component {
        plural = (number, titles) => {
            const cases = [2, 0, 1, 1, 1, 2];
            return number + ' ' + titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
        };

        render() {
            const diffMinutes = (new Date() - new Date(this.props.date)) / 1000 / 60;

            let result;
            if (diffMinutes < 60) {
                result = this.plural(diffMinutes, ['минута', 'минуты', 'минут']);
            } else if (diffMinutes < 60*24) {
                result = this.plural(Math.round(diffMinutes / 60), ['час', 'часа', 'часов']);
            } else {
                result = this.plural(Math.ceil(diffMinutes / 60 / 60), ['день', 'дня', 'дней']);
            }
            this.props.date = `${result}  назад`;

            return <Component {...this.props} />;
        }
    }
}

const DateTimePretty = DateTimeFormatter(DateTime);