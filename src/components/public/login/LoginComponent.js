import React from 'react';
import LoginForm from './LoginForm';

class LoginComponent extends React.Component {
  render() {
    const {location} = this.props;

    return (
        <div className="container">
          <div className="mt-5">
            <LoginForm location={location}/>
          </div>
        </div>
    );
  }
}

export default LoginComponent;
