import React from 'react';
import { GenderType } from '../../../api/generated';

const PersonalInfo = (props: any) => {
	return (
		<>
			<section className="container">
				<div className="row">
					<div className="col-auto ">
						<h1 className="h2 text-center">Personal measurement</h1>
						<p className="p-3 text-justify">
							By submitting a few of your measurements, we will calculate your perfect
							size for <b>{props.productCode}</b> by <b>{props.brandCode}</b>. <br />
							It will take less than a minute.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-2">
						<label className="form-label col-4 mx-0">Gender</label>
					</div>
					<div className="col-9 mx-3">
						{Object.keys(GenderType).map((key) => (
							<div className="form-check form-check-inline" key={key}>
								<input
									value={key}
									name="gender"
									type="radio"
									className="form-check-input"
									required
									checked={props.gender === key}
									onChange={props.handleChange}
								/>
								<label className="form-check-label">{key}</label>
							</div>
						))}
						<div className="invalid-feedback">Your gender is required.</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 mt-3 mb-2  ">
						<div className=" inputsize">
							<label className="inputlabel pb-3">How old are you? </label>
							<input
								type="text"
								className="inputbox"
								name="age"
								required
								data-toggle="tooltip"
								title="Why do we ask for this?  Knowing your age helps us recommend the right size."
								onChange={props.handleChange}
								defaultValue={props.age}
							/>

							<div className="invalid-feedback">Your age is required.</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="input-group has-validation">
							<input
								type="range"
								className="form-range"
								name="height"
								placeholder="height"
								required
								step="1"
								onChange={props.handleChange}
								defaultValue={props.height}
								min="150"
								max="210"
							/>
							<div className="invalid-feedback">Your height is required.</div>
						</div>
						<label className="form-label">Height: {props.height} cms</label>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="input-group has-validation">
							<input
								type="range"
								className="form-range"
								name="bodyWeight"
								placeholder="bodyWeight"
								required
								step="1"
								onChange={props.handleChange}
								defaultValue={props.bodyWeight}
								min="40"
								max="200"
							/>
							<div className="invalid-feedback">Your weight is required.</div>
							<label className="form-label">Weight: {props.bodyWeight} kg</label>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PersonalInfo;
