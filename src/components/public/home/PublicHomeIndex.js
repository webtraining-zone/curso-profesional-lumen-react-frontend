import React from 'react';

class PublicHomeIndex extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 col-xl-7">
              <h1 className="b-home__title">Tools for successful teams</h1>
              <p className="b-home__summary">
                Manage your teams with <em>cutting-edge</em> tools and
                methodologies. No
                more delays, no more concerns, add happiness to your
                professional life and deliver products and services clients will love.
              </p>
              <p>
                <a href="#" className="btn btn-warning">Start now</a>
              </p>
            </div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <img src="./img/team.png" alt=""
                   className="img-fluid b-home__image"/>
            </div>
          </div>
        </div>
    );
  }
}

export default PublicHomeIndex;
