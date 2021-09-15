import React, {useEffect} from 'react';
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contact Us</h1>
          <p>Any feedback/questions are highly appreciated:</p>
          <ul className="list-unstyled text-light footer-link-list">
            <li>
              <i className="fas fa-map-marker-alt fa-fw"></i>
              <a className="text-decoration-none" href="#">
                Berlin, Germany
              </a>
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
      </div>
    </>
  );
}
export default Contact;
