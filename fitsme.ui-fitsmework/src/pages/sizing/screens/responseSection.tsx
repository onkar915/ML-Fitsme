import React from 'react';
const ResponseSection = (props: any) => {
  return (
    <>
      <section className="container">
        <div className="row text-center">
          <div className="col-auto">
            <h1 className="h1">Your Measure Size</h1>
            <p>
              Based on the information you submitted, we reconstructed a digital fit model
              of you, we put that fit model in the different sizes available for this
              product and selected the best size for you.
            </p>
            <h2 className="h2">{props.data.measuredSize}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResponseSection;
