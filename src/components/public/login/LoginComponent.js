import React from 'react';
import LoginForm from './LoginForm';

class LoginComponent extends React.Component {
  render() {
    const {location} = this.props;

    return (<div>
      <LoginForm location={location}/>
    </div>);
  }
}

export default LoginComponent;
