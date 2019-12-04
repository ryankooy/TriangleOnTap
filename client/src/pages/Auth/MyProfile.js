import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Col } from '../../components/Grid';
import { Cards } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import API from '../../utils/API';

class MyProfile extends Component {

	constructor(props) {
    super(props);
    
		this.state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    username: this.props.user.username,
    password: this.props.user.password
		};
  }

  // componentDidMount () {
  //   this.loadProfile();
  // }

  loadProfile = () => {
    AUTH.getUser()
    .then(res => 
      this.setState({ firstName: res.data.user.firstName, lastName: "", username: "", password: ""}))
    .catch(err => console.log(err));
  }
  
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
  }
  
	handleSubmit = (event) => {
		event.preventDefault();
    // TODO - validate!
    if (this.state.firstName && this.state.lastName && this.state.username) {
		AUTH.update({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username
    }).then(response => {
      // console.log(response);
      this.loadProfile()
      window.location.reload();
    });
  }
  }
  
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    
		return (
      <Container>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Cards title="Edit your profile">
              <form style={{marginTop: 10}}>
                <label htmlFor="username">First name: </label>
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  
                />
                <label htmlFor="username">Last name: </label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  
                />
                <label htmlFor="username">Username: </label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  
                />
                <label htmlFor="password">Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <FormBtn onClick={this.handleSubmit}>Save</FormBtn>
              </form>
            </Cards>
          </Col>
          <Col size="md-3"></Col>
      </Container>
		)
	}
}

export default MyProfile;
