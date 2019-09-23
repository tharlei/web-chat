import React, { Component } from 'react';
import FirebaseService from '../utils/firebaseService';
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class Tharlei extends Component {

	
	constructor() {
		super();
		this.iptMessage = React.createRef();
		this.myRef = React.createRef();
		this.state = {
			messages: []
		};
	}

	componentDidMount() {
		FirebaseService.getDataList('messages', (res) => {
			this.setState({messages: res});
			this.myRef.current.scrollTop = this.myRef.current.scrollHeight;
			this.iptMessage.current.focus();
		});
	}

	render() {
		return (
			<div className="App container">
				<div id="messages" ref={this.myRef}>
				{
					this.state.messages.map((message, index) =>
						<p key={index} className={ message.user + ' message text-white' }>{message.text}</p>
					)
				}
				</div>
				<form className="row m-1 flex-nowrap" onSubmit={this.send} autocomplete="off"> 
					<input autocomplete="off" className="form-control" type="text" placeholder="Digite sua mensagem aqui..."
						id="message" ref={this.iptMessage} />
					<button className="ml-1 btn btn-success">
						<FontAwesomeIcon icon={faPaperPlane}/>
					</button>
				</form>
			</div>
		);
	}

	send = e => {
		e.preventDefault();
		FirebaseService.pushData('messages', {
			user: 'tharlei',
			text: this.iptMessage.current.value
		});
		this.iptMessage.current.value = '';
		this.iptMessage.current.focus();
		setTimeout(() => this.myRef.current.scrollTop = this.myRef.current.scrollHeight, 300);
	}
}

export default Tharlei;