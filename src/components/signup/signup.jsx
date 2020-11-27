import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
import {Grid} from '@material-ui/core';
import {Button} from 'semantic-ui-react';

import './Signup.css';
export class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <div className="container">
          <div
            style={{
              fontSize: '24px',
              paddingLeft: '4rem',
              color: '#f50057q',
              opacity: '100%',
              paddingTop: '2rem',
            }}
          >
            Create A New Account
          </div>
          <Grid item xs={12} style={{textAlign: 'center', paddingTop: '4rem'}}>
            <Input
              className="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />{' '}
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center', paddingTop: '1rem'}}>
            <Input
              className="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
            />{' '}
          </Grid>{' '}
          <Grid item xs={12} style={{textAlign: 'center', paddingTop: '1rem'}}>
            <Input
              className="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
            />{' '}
          </Grid>
          <div style={{paddingTop: '4rem', paddingLeft: '30%'}}>
            <Button primary style={{backgroundColor: '#f50057'}}>
              Signup
            </Button>
            <Button primary style={{backgroundColor: '#2979ff'}}>
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
