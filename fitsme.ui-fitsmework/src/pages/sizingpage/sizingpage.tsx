import React, {useState, useEffect} from 'react';
// import Popup from '/../../screens/popup';
const Sizingpage = (props: any) => {
  // const [modalShow, setModalShow] = useState('');
  const [brandCode, setBandCode] = useState(props.match.params.brandCode);
  const [productCode, setProductCode] = useState(props.match.params.productCode);
  useEffect(() => {
    // document.getElementById('btnPopUp')?.click();
    setBandCode(props.match.params.brandCode);
    setProductCode(props.match.params.productCode);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-7  mt-5">
              <div className="card  mb-3">
                <img
                  className="card-img img-fluid"
                  src="https://i.ibb.co/G9ZgvfL/Brunchpantsstudio4-2048x.jpg"
                  // src="/assets/images/product_single_09.jpg"
                  alt="Card image cap"
                  id="product-detail"
                />
              </div>
              {/* <div className="row">
								<div className="col-1 align-self-center">
									<a href="#multi-item-example" role="button" data-bs-slide="prev">
										<i className="text-dark fas fa-chevron-left"></i>
										<span className="sr-only">Previous</span>
									</a>
								</div>
								<div
									id="multi-item-example"
									className="col-10 carousel slide carousel-multi-item"
									data-bs-ride="carousel"
								>
									<div className="carousel-inner product-links-wap" role="listbox">
										<div className="carousel-item active">
											<div className="row">
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_01.jpg"
															alt="Product Image 1"
														/>
													</a>
												</div>
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_02.jpg"
															alt="Product Image 2"
														/>
													</a>
												</div>
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_03.jpg"
															alt="Product Image 3"
														/>
													</a>
												</div>
											</div>
										</div>
										<div className="carousel-item">
											<div className="row">
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_04.jpg"
															alt="Product Image 4"
														/>
													</a>
												</div>
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_05.jpg"
															alt="Product Image 5"
														/>
													</a>
												</div>
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_06.jpg"
															alt="Product Image 6"
														/>
													</a>
												</div>
											</div>
										</div>
										<div className="carousel-item">
											<div className="row">
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_07.jpg"
															alt="Product Image 7"
														/>
													</a>
												</div>
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_08.jpg"
															alt="Product Image 8"
														/>
													</a>
												</div>
												<div className="col-4">
													<a href="#">
														<img
															className="card-img img-fluid"
															src="/assets/images/product_single_09.jpg"
															alt="Product Image 9"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-1 align-self-center">
									<a href="#multi-item-example" role="button" data-bs-slide="next">
										<i className="text-dark fas fa-chevron-right"></i>
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div> */}
            </div>
            <div className="col-lg-5 mt-5 ">
              <div className="card">
                <div className="card-body mt-3">
                  <h1 className="h5">{props.match.params.productCode}</h1>

                  <ul className="list-inline">
                    <li className="list-inline-item mt-3">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <h6>{props.match.params.brandCode}</h6>
                      </p>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item ">
                      <h6>Price:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <h6>€120</h6>
                      </p>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item mb-1">
                      <h6>Description:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <h6>
                          The all-rounder blouse that goes with everything. Made from
                          hand-woven cotton blend,
                        </h6>
                      </p>
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-auto">
                      <ul className="list-inline">
                        <li className="list-inline-item ">
                          <h6>Available Sizes :</h6>
                        </li>
                        <li className=" ">
                          <div className="col-7 mysizebtn  ">
                            <button
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Find your size"
                              style={{fontStyle: 'italic'}}
                              type="button"
                              className="btn productbtn  "
                              name="btnPopUp"
                              id="btnPopUp"
                              value="sizeme"
                              data-bs-toggle="modal"
                              data-bs-target="#popUp"
                            >
                              <img
                                className=" col-3 "
                                src="https://i.ibb.co/q5ZQVFN/SAIZblack.png"
                              ></img>
                              is{' '}
                              <li className="list-inline-item">
                                <h6 className=" productbtn ">
                                  <b> M</b>
                                </h6>
                              </li>
                            </button>
                          </div>
                        </li>
                        <div className="sizebtn mt-3  ">
                          <li className="list-inline-item ">
                            <h6 className="btn  productbtn  btn-size ">S</h6>
                          </li>
                          <li className="list-inline-item">
                            <h6 className="btn  productbtn  btn-size ">M</h6>
                          </li>
                          <li className="list-inline-item">
                            <h6 className="btn productbtn  btn-size ">L</h6>
                          </li>
                          <li className="list-inline-item ">
                            <h6 className="btn    productbtn  btn-size ">XL</h6>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4 ">
                <div className=" card card-postion ">
                  <div className=" col">
                    <div className="row  mx-5 mb-4">
                      <button type="button" className=" col-8 btncart   mt-3  ">
                        ADD TO CART
                      </button>
                    </div>
                    <div className="col-8 mb-4 ">
                      <button
                        type="button"
                        className="btnbuy   btn-xs"
                        name="btnPopUp"
                        id="btnPopUp"
                        value="sizeme"
                        data-bs-toggle="modal"
                        data-bs-target="#popUp"
                      >
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Popup
        modal={modalShow}
        onHide={() => setModalShow('')}
        brandCode={brandCode}
        productCode={productCode}
      /> */}
    </>
  );
};
export default Sizingpage;
