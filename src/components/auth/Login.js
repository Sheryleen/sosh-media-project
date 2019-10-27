import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { userLogin } from "../../store/users/actions";

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(userLogin(this.state, this.props.history));
  };
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <label >Email</label>
          <Input
            type='text'
            name='email'
            id='exampleEmail'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label for='examplePassword'>Password</label>
          <Input
            type='password'
            name='password'
            id='examplePassword'
            value={this.state.password}
            onChange={this.handleChange}/>
       </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
export default connect()(Login);
