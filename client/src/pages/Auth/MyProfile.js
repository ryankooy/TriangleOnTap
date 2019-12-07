import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Col } from '../../components/Grid';
import { Cards } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';

class MyProfile extends Component {

	constructor(props) {
    super(props);
    
		this.state = {
      id: this.props.user._id,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      username: this.props.user.username
      // password: this.props.user.password
		};
  }

  componentDidMount () {
    console.log(this.state);
    if(!this.props.id) {
      this.loadProfile();
    }
  }

  loadProfile = () => {
    AUTH.getUser()
    .then(res => {
      console.log('res:', res);
      this.setState({
        id: res.data.user._id,
        firstName: res.data.user.firstName,
        lastName: res.data.user.lastName,
        username: res.data.user.username,
        // password: ""
      });
    }).catch(err => console.log(err));
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
      const profileData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username
      };
      AUTH.update(this.state.id, profileData).then(response => {
        // this.loadProfile();
        console.log(response);
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
              {/* <form style={{marginTop: 10}}> */}
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  label="First Name"
                  variant="outlined"
                />
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  label="Last Name"
                  variant="outlined"
                />
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  label="Username"
                  variant="outlined"
                  
                />
                {/* <label htmlFor="password">Password: </label>
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
                /> */}
                <FormBtn onClick={this.handleSubmit}>Save</FormBtn>
              {/* </form> */}
            </Cards>
          </Col>
          <Col size="md-3"></Col>
      </Container>
		)
	}
}

export default MyProfile;
