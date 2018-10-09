import React from 'react';

class Header extends React.Component {
  render() {
    return (
        // https://bootswatch.com/lumen/
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">Project Manager</a>
              <button className="navbar-toggler" type="button"
                      data-toggle="collapse" data-target="#navbarRight"
                      aria-controls="navbarRight" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarRight">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span
                        className="sr-only">(current)</span></a>
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
