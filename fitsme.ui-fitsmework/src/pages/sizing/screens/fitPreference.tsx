import React from 'react';
import {FitPreferenceType} from '../../../api/generated';
const FitPreference = (props: any) => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-auto">
            <h1 className="h2  text-center pb-2">Fit Preference</h1>
            {/* <h2 className="h3  text-center">{props.fitPreference}</h2> */}
            <p className="mx-5">
              Fit Preference – how do you want this {props.productCode} to fit?
            </p>
            <div className="col-7 text-center mx-auto pb-2 " role="alert">
              <h6 style={{fontStyle: 'italic'}}>
                Use the slider to slide the Preference{' '}
              </h6>
            </div>

            <div style={{fontStyle: 'italic'}} className="col-12 p-2 slidetext ">
              <p className=" slidetext"> Tight</p>
              <p className=" slidetext mx-5 col-4 ">
                {' '}
                True to fit<br></br>(as intended by designer)
              </p>
              <p className=" slidetext"> Oversized </p>{' '}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="input-group has-validation">
              <input
                type="range"
                className="form-range"
                name="fitSize"
                id="range"
                placeholder="fitSize"
                required
                step="1"
                onChange={props.handleChange}
                defaultValue={props.fitSize}
                min="0"
                max="2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FitPreference;
