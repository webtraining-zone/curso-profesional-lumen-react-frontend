import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthenticationService
  from '../../../../auth/services/AuthenticationService';

class Header extends React.Component {

  handleLogout = () => {
    AuthenticationService.logout().then(() => {
      console.log('Logged out');

      // TODO: Redirect to the public home
    });
  };

  render() {
    return (
        // https://bootswatch.com/lumen/
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <NavLink className="navbar-brand" to={'/'}>
                <i className="fas fa-project-diagram"></i>
                <span>&nbsp;Project Manager</span></NavLink>
              <button className="navbar-toggler" type="button"
                      data-toggle="collapse" data-target="#navbarRight"
                      aria-controls="navbarRight" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarRight">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/users'}
                             activeStyle={{color: '#158CBA'}}>Users<span
                        className="sr-only">(current)</span></NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/projects'}
                             activeStyle={{color: '#158CBA'}}>Projects</NavLink>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link"
                       onClick={this.handleLogout}>Logout</a>
                  </li>

                </ul>

              </div>
            </div>
          </nav>
        </header>
    );
  }
}

export default Header;
