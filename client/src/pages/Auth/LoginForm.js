import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Col } from '../../components/Grid';
import { Cards } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import Nav from '../../components/Nav';
import './Auth.css';

const newStyle = {
	color: "#7D3F20",
};

class LoginForm extends Component {
  
	constructor() {
    	super();
    	this.state = {
			username: '',
			password: '',
			redirectTo: null
		};
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.login(this.state.username, this.state.password);
		this.setState({
			redirectTo: '/'
		});
	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<Container>
            		<Col></Col>
            		<Col>
						<Cards title="Welcome to Triangle on Tap!">
                  			<Input
                    			type="text"
								name="username"
								label="UserName"
                 				variant="outlined"
                    			value={this.state.username}
                    			onChange={this.handleChange}
                  			/>
                  			<Input
                    			type="password"
								name="password"
								label="Password"
                  				variant="outlined"
								value={this.state.password}
								onChange={this.handleChange}
                  			/>
                  			<Link style = {newStyle} to="/signup">Register</Link>
                  			<FormBtn onClick={this.handleSubmit}>Login</FormBtn>
              			</Cards>
            		</Col>
            		<Col size="md-3"></Col>
				</Container>
			)
		}
	};
};

export default LoginForm;
