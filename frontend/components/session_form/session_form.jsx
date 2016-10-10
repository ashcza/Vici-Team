import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this._handleDemo = this._handleDemo.bind(this);
		this.nameChange = this.nameChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
	}

	componentWillReceiveProps(newProps){
		if (this.demo) {
			this._handleDemo();
		}
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push(`groups/${this.props.currentUser.group}`);
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	guestSubmit(){
		const user = this.state;
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login" || this.props.formType === "" ) {
			return <Link to="/signup">Sign up</Link>;
		} else {
			return <Link to="/login">Log in</Link>;
		}
	}

	renderErrors(){
		if (this.props.errors) {
		return(
			<ul className="sign-in-errors">
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	} else {
		return (
			<div></div>
		);
	}
	}

	emailAndName(){
		if (this.props.formType === "login" || this.props.formType === "" ) {
			return "";
		} else {
			return (
				<div>
						<label className="form-line"> Full Name:
							<input type="text"
								value={this.state.name}
								onChange={this.update("name")}
								className="login-input" />
						</label>

					<br />
						<label className="form-line"> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>
					<br />

					<label className="form-line"> Phone:
						<input type="text"
							value={this.state.phone}
							onChange={this.update("phone")}
							className="login-input" />
					</label>
					<br />
					<label className="form-line"> Group Code:
						<input type="text"
							value={this.state.code}
							onChange={this.update("code")}
							className="login-input" />
					</label>
				</div>
			);
		}
	}

	welcomeMessage(){
		if (this.props.formType === "login" || this.props.formType === "" ) {
			return (
				<div>
					<h2 className="login-title">Log in</h2>
					<br />
					<p className="login-message">
						Not registered with us yet? { this.navLink() }
					</p>
				</div>
			);
		} else {
			return (
			<div>
				<h2 className="login-title">Sign up</h2>
				<br />
				<p className="login-message">
					Already have an account? { this.navLink() }
				</p>
			</div>
			);
		}
	}

	_handleDemo() {
		let that = this;
    let i = 1;
    const demoUser = "ForrestGump";
		const demoName = "Forrest Gump ";
		const demoEmail = "runforrest@bubbashrimp.com ";
		if (this.props.formType === "login" || this.props.formType === "" ) {
	    const intervalID = setInterval(function () {
	      if (i < 12) {
					that.setState({ username: demoUser.slice(0, i) });
	      } else if (i === 12) {
					that.setState({ password: "password" });
	      } else {
	        window.clearInterval(intervalID);
	        that.guestSubmit();
	      }
	      i++;
	    }, 100);
			this.demo = false;
		} else {
		this.demo = true;
		hashHistory.replace("/login");
		}
	}


	nameChange(e) {
	this.setState({ username: e.target.value});
	}

	passwordChange(e) {
		this.setState({ password: e.target.value});
	}

	render() {
		var divStyle = {
			backgroundImage: 'url(' + 'http://res.cloudinary.com/ashcon/image/upload/v1476121851/backgroundplaceit_gpjskn.png' + ')'
		};

		return (
			<div className="wrapper-background-login" style={divStyle}>
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<br/>
					{ this.welcomeMessage() }
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label className="form-line"> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.nameChange}
								className="login-input" />
						</label>

						<br />
						<label className="form-line"> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.passwordChange}
								className="login-input" />
						</label>

						<br />
						{this.emailAndName()}
						<div className="session-buttons">
							<input type="submit" className="enter-button" value="Submit" />
							<div>
								<input type="button"
	                       value="Log in with Demo"
	                       className="demo-button"
	                       onClick={this._handleDemo} />
											 <p className="form-text-detail">Login with existing demo account</p>
							</div>
						</div>
				</div>
				</form>
			</div>
			</div>
		);
	}
}

export default withRouter(SessionForm);
