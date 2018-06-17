'use strict';

function MessageHistory({list}) {
	const messageList = list.map(message => {
		return (
 			message.type === 'message' &&  <Message from={message.from} message={message} /> || 
 			message.type === 'response' && <Response from={message.from} message={message} /> || 
 			message.type === 'typing' && <Typing from={message.from} message={message} />) ;
	});
	return (<ul> {messageList} </ul>);
}

MessageHistory.defaultProps = { list: [] }; 