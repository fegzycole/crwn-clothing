import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { createUserProfileDocument, auth } from '../../firebase/firebase.util';
import './signup.styles.scss';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };


  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">
          <span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Password Confirmation"
                required
              />
              <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
          </span>
        </h2>
      </div>
    );
  }
}

export default Signup;
