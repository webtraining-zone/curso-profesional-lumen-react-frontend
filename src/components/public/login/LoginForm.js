import React from 'react';
import {toast} from 'react-toastify';
import AuthenticationService
  from '../../../auth/services/AuthenticationService';
import {Redirect} from 'react-router-dom';

class LoginForm extends React.Component {

  state = {
    redirectToReferrer: false,
  };

  handleLoginAction = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.warn('Invalid!');
      toast.error('Please, fill all the required fields!');
      return;
    }

    const data = new FormData(event.target);

    AuthenticationService.login(data.get('username'), data.get('password')).
        then(() => {
          this.setState(() => ({
            redirectToReferrer: true,
          }));
        }).catch(error => {
      toast.error(`Couldn't start a session!`);
    });
  };

  render() {

    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;
    //
    if (redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return (
        <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="b-form">
            <h1>Login</h1>
            <form onSubmit={this.handleLoginAction} noValidate>

              <div className="form-group">
                <label htmlFor="username">Username* :</label>
                <input id="username" name="username" className="form-control"
                       type="text" required/>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password* :</label>
                <input id="password" name="password" className="form-control"
                       type="password" required/>
              </div>

              <button type="submit" className="btn btn-primary">Submit
              </button>
            </form>
          </div>
        </div>
    );
  }
}

export default LoginForm;
