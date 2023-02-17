import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    return (
      <div className='login-container'>
        <h1>Login</h1>
        <input type='text' placeholder='Nome' />
        <input type='password' placeholder='Senha' />

        <button type='submit'>Login</button>
      </div>
    );
  }
}

export default LoginContainer;