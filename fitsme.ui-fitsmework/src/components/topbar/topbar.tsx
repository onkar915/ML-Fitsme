import React from 'react';
import {Link} from 'react-router-dom';
const Topbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
      id="templatemo_nav_top"
    >
      <div className="container text-light">
        <div className="w-100 d-flex justify-content-between">
          <div>
            <i className="fa fa-envelope mx-2"></i>
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href="mailto:svenja.tegtmeier@saenguin.com"
              rel="noreferrer"
              target="_blank"
            >
              Svenja.tegtmeier@saenguin.com
            </a>
            <i className="fa fa-phone mx-2"></i>
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href="tel:+4915129270914"
            >
              +49 15129270914
            </a>
          </div>
          <div>
            <Link
              className="text-light text-decoration-none"
              to={{
                pathname: 'https://www.facebook.com/saenguin',
              }}
              target="_blank"
            >
              <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
            </Link>
            <Link
              className="text-light text-decoration-none"
              to={{
                pathname: 'https://www.instagram.com/saenguin/',
              }}
              target="_blank"
            >
              <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
            </Link>
            <Link
              className="text-light text-decoration-none"
              to={{
                pathname: 'https://www.linkedin.com/company/saenguin-fitsme/about',
              }}
              target="_blank"
            >
              <i className="fab fa-linkedin fa-sm fa-fw"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
