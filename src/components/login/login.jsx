import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {Input as Inp, Checkbox, Button} from 'semantic-ui-react';
import Axios from 'axios';
import {env, url} from '../../urls';
import {connect} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import {Redirect} from 'react-router-dom';

toast.configure();

export class Login extends Component {
  state = {
    email: '',
    password: '',
    clikedLogin: false,
  };
  takeInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  clickLogin = async () => {
    this.setState({clikedLogin: true});
    let result = await Axios.post(
      env === 'dev' ? url[0] + '/admin/login' : url[1] + '/admin/login',
      this.state
    );
    if (result.data.invalid) {
      toast.error('Invalid email and password');
    } else if (result.data.logged) {
      this.props.loginAdmin(result.data);
      toast.success('Login Successfull');
    } else if (!result.exist) {
      toast.warning("Account doesn't exist");
    }

    console.log(result);
    this.setState({clikedLogin: false});
  };
  render() {
    if (this.props.logged) {
      return <Redirect to="/main" />;
    }
    return (
      <div
        style={{height: '100vh', width: '100vw', backgroundColor: '#2979ff'}}
      >
        <Grid container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid
            item
            xs={12}
            sm={8}
            style={{
              paddingTop: '120px',
              height: '100vh',
            }}
          >
            <div
              style={{
                height: '350px',
                backgroundColor: 'white',
                width: '420px',
                margin: '0 auto',
                borderRadius: '5px',
              }}
            >
              <Grid container direction="row" spacing={3}>
                <Grid
                  item
                  xs={12}
                  style={{textAlign: 'center', paddingTop: '20px'}}
                >
                  <h1 style={{fontFamily: 'serif'}}>
                    Sign in into your account
                  </h1>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                  <Inp
                    placeholder="email"
                    icon="mail"
                    iconPosition="left"
                    name="email"
                    onChange={this.takeInput}
                  />
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                  <Inp
                    type="password"
                    placeholder="password"
                    icon="key"
                    iconPosition="left"
                    name="password"
                    onChange={this.takeInput}
                  />
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                  <Checkbox label="Keep me signed in" />
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                  <Button
                    color="white"
                    onClick={this.clickLogin}
                    loading={this.state.clikedLogin}
                    style={{color: '#f50057'}}
                  >
                    {' '}
                    Login{' '}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </div>
    );
  }
}

const adminLogin = (data) => ({
  type: 'LOGIN',
  data,
});

const mapStateToProps = (state) => {
  return {
    logged: state.user.myinfo.logged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAdmin: (data) => dispatch(adminLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
