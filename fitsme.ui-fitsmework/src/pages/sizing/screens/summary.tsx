import React, { useState } from 'react';
const Summary = (props: any) => {

	return (
		<>
			<section className="container">
				<div className="row text-center">
					<div className="col-lg-10 m-auto">
						<h1 className="h1 mb-3" style={{ fontStyle: 'italic' }}>Summary</h1>
						<h1 className="h2 mb-3">{props.productCode}</h1>
					</div>
				</div>
				<div className="row text-center">
					<h2 style={{ fontStyle: 'italic' }}>Measurements</h2>
					<ul className="list-unstyled ">
						<li>
							Gender : <b>{props.gender} </b>
						</li>
						<li>
							Age : <b>{props.age} </b>
						</li>
						<li>
							Height : <b>{props.height} </b>
						</li>
						<li>
							Weight : <b>{props.bodyWeight} </b>
						</li>
						<li>
							Body Shape : <b>{props.torsoLength} </b>
						</li>
						<li>
							Fit Preference : <b>{props.fitPreference} </b>
						</li>
					</ul>
				</div>
				<hr className="col-10 mx-5 text-muted mb-2"></hr>
				<div style={{

					margin: 'auto',
					marginLeft: '40px',
					marginBottom: '10px',
				}} className="container mx-5 ">
					<span className="mx-2 ">Email :</span>
					<input
						name="emailAddress"
						defaultValue={props.emailAddress}
						type="email"
						placeholder="Enter your email"
						className="email-input mx-2 btnsoft"
						onChange={props.handleChange}
					/>
					{/*If the entered email is valid, the message will be blue, otherwise it will be red. */}
					<div className={`message text-muted ${props.isValid ? 'success' : 'error'}`}>
						{props.message}
					</div>
				</div>
				<h6 className="col-10 mx-5 text-muted ">We promise to not spam, we might only reach out if we are having trouble with your sizing.
					<hr className="mb-2"></hr>
					<h6 className="col-12 mx-5">Thank you for helping us build this tool!</h6></h6>
			</section>
		</>
	);
};
export default Summary;
