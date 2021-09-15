import React, {useEffect} from 'react';
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row  py-5">
          <div className="col-md-8 text-dark">
            <h1> Where it all started - saenguin</h1>
            <p>
              “Saenguin&apos;s customers needed more sizing information, more info
              regarding fit, and demanded better customer service. We always knew that if
              we had the customer&apos;s measurements, we would be able to quickly and
              reliably send the correct size, but not enough people gave it to us. So,
              they ordered & returned, or ordered 2 sizes and complained…” - Marita
              Sanchez, CEO
            </p>
            <p>
              So, we created what we couldn&apos;t find anywhere. A tool that works for
              us. And by extension: all!
            </p>
            <p>
              Saenguin is the testing ground and first roll-out for Fitsme. The algorithm
              was developed with the use of perfect information from product data of all
              garments. With a team that knows how the industry really works and what
              actually matters. Because, not every millimeter matters. Actually, the only
              thing that matters is that it fits in the end. And learning who the
              customers are, what they actually look like, so we can provide them with a
              better experience in the future:
            </p>
            <p className="text-center">
              Tailored products <br />
              Tailored preferences
              <br />
              Tailored websites
              <br />
            </p>
            <p>
              Saenguin will have a product portfolio that has half-sizes in all products,
              and will offer a minimum of 8 sizes for each product, tailored to different
              body types. In addition, saenguin can even play with different designs and
              market to different body types, with the 2nd fitsme product (a product
              recommendation questionnaire), where the same data input will be used to
              recommend different products to different people. The next era of
              customization. Thanks to Fitsme, Saenguin will be “the brand that fits”.
            </p>
            <p>
              The better Fitsme becomes, the better the saenguin will be and vice versa.
            </p>
          </div>
          <div className="col-md-4">
            <img src="assets/images/about-hero.svg" alt="About Hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
