import React from 'react';
const Feature = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Features</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-80">
                <a href="shop-single.html">
                  <img src="assets/images/page1.jpg" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <h2 className="h2 text-decoration-none">Size recommendation</h2>
                  <p className="card-text">
                    Fitsme matches product data and customer data. Matched every time, for
                    any product, and any brand. We turn 2D data into 3D avatars, dress
                    them and give your customer the right fit. Without relying on massive
                    amounts of return data of the product, without asking customers to
                    measure or scan themselves, without shipping collections around the
                    world to be scanned. Our proprietary algorithm works. Well, Efficient,
                    And every time. We know what it takes: just the right amount of
                    Simplicity & Accuracy
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="h2 text-decoration-none">Future possibilities</h2>
                  <p className="card-text">
                    From body shapes, to fit preferences, personal style and needs by
                    occasion: you will know what your customers want, and when they want
                    it - providing them with the ultimate shopping experience. Customers
                    create their virtual profile through a gamified set-up process once,
                    and then take it with them across platforms. They are already there,
                    are you too?
                  </p>
                </div>
                <a href="shop-single.html">
                  <img src="assets/images/page2.jpg" className="card-img-top" alt="..." />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img src="assets/images/page3.jpg" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <h2 className="h2 text-decoration-none">
                    Changing how industry operates
                  </h2>
                  <p className="card-text">
                    Fitsme will have a bigger impact on an enormously polluting industry
                    than any of the fashion houses ever will. For a true sustainable
                    fashion industry. Across the board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Feature;
