import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark " id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-fitsme border-bottom pb-3 border-light logo">
              Fitsme
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                Berlin, Germany
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:+4915129270914">
                  +49 15129270914
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a
                  className="text-decoration-none"
                  href="mailto:svenja.tegtmeier@saenguin.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Svenja.tegtmeier@saenguin.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Further Info
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none"
                  to="/saenguin/Short sleeve blouse/sizing"
                >
                  Sizing
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <li className="list-inline-item border border-light rounded-circle text-center">
                <Link
                  className="text-light text-decoration-none"
                  to={{
                    pathname: 'https://www.facebook.com/saenguin',
                  }}
                  target="_blank"
                >
                  <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                </Link>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <Link
                  className="text-light text-decoration-none"
                  to={{
                    pathname: 'https://www.instagram.com/saenguin/',
                  }}
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-lg fa-fw"></i>
                </Link>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <Link
                  className="text-light text-decoration-none"
                  to={{
                    pathname: 'https://www.linkedin.com/company/saenguin-fitsme/about',
                  }}
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-lg fa-fw"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left text-light">Copyright &copy; 2021 Saenguin</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
