import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
import './Signup.css';
export class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <div className="container">
          <Input
            className="username"
            icon="user"
            iconPosition="left"
            placeholder="Username"
          />{' '}
          <br />
          <Input
            className="email"
            icon="mail"
            iconPosition="left"
            placeholder="Email"
          />{' '}
          <br />
          <Input
            className="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
          />
        </div>
      </div>
    );
  }
}

export default Signup;
