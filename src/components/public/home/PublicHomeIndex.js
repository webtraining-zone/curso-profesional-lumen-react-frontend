import React from 'react';
import {Link} from 'react-router-dom';

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
                professional life and deliver products and services clients will
                love.
              </p>
              <p>
                <Link className="btn btn-warning" to={'/users'}>Start now</Link>
              </p>
            </div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <img src="./img/team.png" alt=""
                   className="img-fluid b-home__image"/>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="alert alert-warning">
                Esta aplicación es el resultado de nuestro <a
                  href="https://webtraining.zone/cursos/creacion-de-aplicaciones-con-lumen-y-react"
                  target="_blank" rel="noopener noreferrer">Curso
                Profesional de Lumen + React</a>,
                si te gustaría aprender cómo crearla completamente desde cero,
                te invitamos a <a
                  href="https://webtraining.zone/aportacion/creacion-de-aplicaciones-con-lumen-y-react/1"
                  target="_blank" rel="noopener noreferrer">adquirir
                este curso en este enlace</a>.
              </div>

              <div className="embed-responsive embed-responsive-16by9 mb-5">
                <iframe src="https://player.vimeo.com/video/295236882"
                        width="640" height="360" frameBorder="0"
                        webkitallowfullscreen mozallowfullscreen
                        allowFullScreen
                        className="embed-responsive-item mb -5"></iframe>

              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default PublicHomeIndex;
