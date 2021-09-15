import React from 'react';
import { ApiService } from '../../services';
import Popup from './popup';
import { Loader } from '../../components';
import ProductSize from './productSize';
import { GarmentType, GenderType, BodyShapeType, TorsoType, FitPreferenceType } from '../../api/generated';
interface ISizingProps {
	isLoading: boolean;
	productMeasurements: any,
	modalShow: string,
	response: any,
	productCode: string;
	brandCode: string;
	request: any;
	product: any;
}

class Sizing extends React.Component<{}, ISizingProps> {
	apiService: ApiService;
	constructor(props: any) {
		super(props);
		this.state = {
			productCode: props.match.params.productCode,
			brandCode: props.match.params.brandCode,
			isLoading: true,
			productMeasurements: null,
			response: null,
			modalShow: '',
			request: null,
			product: null,
		};
		this.apiService = new ApiService();
	}
	getRequest() {
		return JSON.parse(localStorage.getItem('isState') ?? JSON.stringify({
			age: 18,
			bodyWeight: 30,
			height: 50,
			gender: GenderType.Female,
			bodyShape: BodyShapeType.Pear,
			torsoLength: TorsoType.Regular,
			fitPreference: FitPreferenceType.Average,
			emailAddress: ''
		}));
	}
	componentDidMount() {
		this.getProductMeasurements();
		this.getProductDetail();
		if (localStorage.getItem('isState') !== null) {
			this.setState({ isLoading: true });
			var obj = this.getRequest();
			obj.brandCode = this.state.brandCode;
			obj.productCode = this.state.productCode;
			this.calcuateMeasurement(obj);
		}
		this.setState({ isLoading: false });
	}
	getProductMeasurements() {
		this.apiService
			.getProductMeasurements(this.state.brandCode, this.state.productCode)
			.then((productMeasurements: any) => {
				this.setState({ productMeasurements });
			})
			.catch((errorData: any) => {
			});
	}
	getProductDetail() {
		this.apiService
			.getProductDetail(this.state.brandCode, this.state.productCode)
			.then((product: any) => {
				this.setState({ product });
			})
			.catch((errorData: any) => {
			});

	}
	calcuateMeasurement(request: any) {
		this.apiService
			.getCalculation(request)
			.then((data: any) => {
				this.setState({ response: data });
			})
			.catch((errorData: any) => {
			});
		this.setState({ isLoading: false });
	}

	render() {
		return (
			<>
				{
					this.state.isLoading ? <Loader /> : <>
						<section className="">
							<div className="container pb-5">
								<div className="row">
									<div className="col-lg-7  mt-5">
										<div className="card  mb-3">
											{(this.state.product !== null ? (
												(this.state.product.garmentType === GarmentType.Pants ?

													<img
														className="card-img img-fluid"
														src="https://cdn.shopify.com/s/files/1/0557/7762/4247/products/Brunchpantsstudio4_1512x.jpg?v=1628578329"
														alt="Card image cap"
														id="product-detail"
													/> :
													<img
														className="card-img img-fluid"
														src="https://cdn.shopify.com/s/files/1/0557/7762/4247/products/DSC06434_2048x.jpg?v=1630494344"
														alt="Card image cap"
														id="product-detail"
													/>
												)) : <img
												className="card-img img-fluid"
												src="https://cdn.shopify.com/s/files/1/0557/7762/4247/products/DSC06434_2048x.jpg?v=1630494344"
												alt="Card image cap"
												id="product-detail"
											/>)}
										</div>
									</div>
									<div className="col-lg-5 mt-5 ">
										<div className="card">
											<div className="card-body mt-3">
												<h1 className="h5">{this.state.productCode}</h1>
												<ul className="list-inline">
													<li className="list-inline-item mt-3">
														<h6>Brand:</h6>
													</li>
													<li className="list-inline-item">
														<p className="text-muted">
															<h6>{this.state.brandCode}</h6>
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
																The all-rounder piece that goes with everything. Made from
																hand-woven cotton blend.
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
																<div className="col-7 mysizebtn btnsoft   ">
																	<button
																		data-toggle="tooltip"
																		data-placement="top"
																		title="Find your size"
																		style={{ fontStyle: 'italic' }}
																		type="button"
																		className="btn  btnsoft  productbtn  "
																		name="btnPopUp"
																		id="btnPopUp"
																		value="sizeme"
																		data-bs-toggle="modal"
																		data-bs-target="#popUp"
																		onClick={() => {
																			this.setState({ modalShow: 'show' });
																		}}
																	>
																		{(this.state.response !== null ?
																			<>
																				Your
																				<img
																					className=" col-3  "
																					src="https://i.ibb.co/q5ZQVFN/SAIZblack.png"
																				></img>&nbsp;is&nbsp;
																				{this.state.response?.measuredSize}
																			</>
																			:
																			<>
																				Whats my{' '}
																				<img
																					className=" col-3  "
																					src="https://i.ibb.co/q5ZQVFN/SAIZblack.png"
																				></img>
																				?
																			</>
																		)}
																	</button>
																</div>
															</li>
															<div className="sizebtn mt-3  ">
																 <li className="list-inline-item ">
                          <h6 className="btn btnsoft productbtn  btn-size ">
                            {(this.state.productMeasurements !== null && <ProductSize data={this.state.productMeasurements} />
															)}
                          </h6>
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
														<button type="button" className=" col-8 btncart btnsoft  mt-3  ">
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
						<Popup
							modal={this.state.modalShow}
							onHide={() => this.setState({ modalShow: '' })}
							productCode={this.state.productCode}
							brandCode={this.state.brandCode}
							data={this.state.response}
							currentSize={this.state.response === null ? 1 : 6}
							age={this.getRequest().age}
							bodyWeight={this.getRequest().bodyWeight}
							height={this.getRequest().height}
							gender={this.getRequest().gender}
							bodyShape={this.getRequest().bodyShape}
							torsoLength={this.getRequest().torsoLength}
							fitPreference={this.getRequest().fitPreference}
							emailAddress={this.getRequest().emailAddress}
						/>
					</>
				}
			</>
		);
	}
}

export default Sizing;