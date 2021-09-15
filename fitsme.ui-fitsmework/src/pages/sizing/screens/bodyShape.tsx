import React from 'react';
import { BodyShapeType } from '../../../api/generated';

const BodyShape = (props: any) => {
	return (
		<>
			<section className="container">
				<div className="row">
					<div className="col-auto">
						<h1 className="h2  text-center ">Body Shape</h1>
						<p className="p-2">
							Please select the body shape that you most closely associated with your
							body. We assess your shoulder, waist and hip ratios. Pay attention to the
							relationship between those.
						</p>
					</div>
				</div>
				<div className="row">
					{Object.keys(BodyShapeType).map((key) => (
						<div className="col-auto p-4 pb-3 mx-auto roundbody " key={key}>
							<div className="card mb-4 product-wap p-1 rounded-circle">
								<div className="card rounded-circle hovereffect">
									<img
										src={`/assets/images/bodyshape.${key.toLowerCase()}.jpg`}
										className="card-img rounded-circle img-fluid"
									/>
									<div className="card-img-overlay rounded-circle product-overlay d-flex align-items-center justify-content-center">
										<ul className="list-unstyled">
											<li>
												<a
													className="btn btn-fitsme text-white active"
													href="#"
													onClick={() => {
														props.handleChange(key);
														props.next();
													}}
												>
													<i className="fas fa-check"></i>
												</a>
											</li> <div className="middle">
												<div className="text"><b><h6>{key}</h6></b></div>
											</div>
										</ul>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default BodyShape;
