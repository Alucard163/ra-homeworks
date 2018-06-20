'use strict';

const FeedbackForm = props => {

	const submitData = event => {
		event.preventDefault();
		const formElements = event.currentTarget.elements;
		console.log(formElements.salutation.value);
		const form = {
			salutation: formElements.salutation.value,
			name: formElements.name.value,
			subject: formElements.subject.value,
			message: formElements.message.value,
			email: formElements.email.value,
			snacks: Array.from(formElements.snacks).filter(elem => elem.checked).map(elem => elem.value)
		}
		props.onSubmit(JSON.stringify(form));
	}

	return (
		<form className="content__form contact-form" onSubmit={submitData}>
			<div className="testing">
				<p>Чем мы можем помочь?</p>
			</div>
			<div className="contact-form__input-group">
				<input 
					defaultChecked={props.data.salutation === 'Мистер'} 
					className="contact-form__input contact-form__input--radio" 
					id="salutation-mr" 
					name="salutation" 
					type="radio" 
					value="Мистер"
				/>
				<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>

				<input 
					defaultChecked={props.data.salutation === 'Мисис'} 
					className="contact-form__input contact-form__input--radio" 
					id="salutation-mrs" 
					name="salutation" 
					type="radio" 
					value="Мисис"
				/>
				<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>

				<input 
					defaultChecked={props.data.salutation === 'Мис'} 
					className="contact-form__input contact-form__input--radio" 
					id="salutation-ms" 
					name="salutation" 
					type="radio" 
					value="Мис"
				/>
				<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="name">Имя</label>
				<input 
					className="contact-form__input contact-form__input--text" 
					defaultValue={props.data.name} 
					id="name" 
					name="name" 
					type="text"
				/>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
				<input 
					className="contact-form__input contact-form__input--email" 
					defaultValue={props.data.email} 
					id="email" 
					name="email" 
					type="email"
				/>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
				<select 
					className="contact-form__input contact-form__input--select" 
					defaultValue={props.data.subject} 
					id="subject" 
					name="subject"
				>
					<option>У меня проблема</option>
					<option>У меня важный вопрос</option>
				</select>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
				<textarea 
					className="contact-form__input contact-form__input--textarea" 
					defaultValue={props.data.message} 
					id="message" 
					name="message" 
					rows="6" 
					cols="65"
				>
				</textarea>
			</div>
			<div className="contact-form__input-group">
				<p className="contact-form__label--checkbox-group">Хочу получить:</p>

				<input 
					className="contact-form__input contact-form__input--checkbox" 
					defaultChecked={props.data.snacks.includes('пицца')} 
					id="snacks-pizza" 
					name="snacks" 
					type="checkbox" 
					value="пицца"
				/>
				<label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>

				<input 
					className="contact-form__input contact-form__input--checkbox" 
					defaultChecked={props.data.snacks.includes('пирог')} 
					id="snacks-cake" 
					name="snacks" 
					type="checkbox" 
					value="пирог"
				/>
				<label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
			</div>
			<button className="contact-form__button" type="submit">Отправить сообщение!</button>
			<output id="result" />
		</form>
	);
}
