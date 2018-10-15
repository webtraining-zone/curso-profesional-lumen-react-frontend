import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        // https://bootswatch.com/lumen/
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to={'/'}>Project Manager</Link>
              <button className="navbar-toggler" type="button"
                      data-toggle="collapse" data-target="#navbarRight"
                      aria-controls="navbarRight" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarRight">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to={'/users'}>Users<span
                        className="sr-only">(current)</span></Link>
                  </li>

                  <li className="nav-item active">
                    <Link className="nav-link" to={'/projects'}>Projects</Link>
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
