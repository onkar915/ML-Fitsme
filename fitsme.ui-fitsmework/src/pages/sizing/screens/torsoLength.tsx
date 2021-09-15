import {faBold} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {TorsoType} from '../../../api/generated';
const TorsoLength = (props: any) => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-auto">
            <h1 className="h2 text-center">Torso Length</h1>
            <p className="p-2">
              Please select your torso to leg length. From the left with a shorter torso
              and longer legs, middle is equally between the two and the right one
              indicates your torso is a bit longer than your legs.
            </p>
          </div>
        </div>
        <div className="row">
          {Object.keys(TorsoType).map((key) => (
            <div className="col-md-4" key={key}>
              <div className="card mb-4 product-wap rounded-circle">
                <div className="card rounded-circle hovereffect">
                  <img
                    src={`/assets/images/torso.${key.toLowerCase()}.jpg`}
                    className="card-img rounded-circle img-fluid"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-fitsme text-white"
                          href="#"
                          onClick={() => {
                            props.handleChange(key);
                            props.next();
                          }}
                        >
                          <i className="fas fa-check"></i>
                        </a>
                      </li>
                      <div className="middle">
                        <div className="text">
                          <b>
                            <h6>{key}</h6>
                          </b>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <h6 className="bodyname text-center mt-4 ">
             <b className="bodyname alert " > {props.torsoLength} </b>
            </h6> */}
        </div>
      </section>
    </>
  );
};

export default TorsoLength;
