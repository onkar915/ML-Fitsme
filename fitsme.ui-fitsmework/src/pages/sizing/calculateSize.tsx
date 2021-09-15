import React from 'react';
import {
	GenderType,
	FitPreferenceType,
	TorsoType,
	BodyShapeType,
	CalculatorRequest,
} from '../../api/generated';
import { Loader } from '../../components';
import {
	BodyShape,
	FitPreference,
	NextButton,
	Oops,
	PersonalInfo,
	PrevButton,
	ResponseSection,
	Summary,
	TorsoLength,
} from './screens';

import { Link } from 'react-router-dom';
import { ApiService } from '../../services';

interface IWizardProp extends CalculatorRequest {
	currentStep: number;
	isLoading: boolean;
	fitSize: number;
	data: any;
	error: boolean;
	isValid: boolean;
	message: string;
	emailRegex: RegExp;
}

export default class CalculateSize extends React.Component<{}, IWizardProp> {
	apiService: ApiService;
	constructor(props: any) {
		super(props);
		this.state = {
			currentStep: 1,
			productCode: props.productCode,
			brandCode: props.brandCode,
			isLoading: false,
			age: props.age,
			bodyWeight: props.bodyWeight,
			height: props.height,
			gender: props.gender,
			bodyShape: props.bodyShape,
			torsoLength: props.torsoLength,
			fitPreference: props.fitPreference,
			emailAddress: props.emailAddress,
			fitSize: 1,
			data: null,
			error: false,
			isValid: true,
			message: '',
			emailRegex: /\S+@\S+\.\S+/
		};
		this.apiService = new ApiService();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		if (localStorage.getItem('isState') !== null) {
			this.loadData(this.state);
		}
	}
	loadData(request: any) {
		this.setState({ isLoading: true });
		this.apiService
			.getCalculation(request)
			.then((data: any) => {
				this.setState({ data, currentStep: 6, isLoading: false });
				localStorage.setItem('isState', JSON.stringify(this.state));
			})
			.catch((errorData: any) => {
				console.log(errorData);
				this.setState({ error: true, currentStep: 6, isLoading: false });
			});
	}
	handleSubmit(event: any) {
		this.loadData(this.state);
		event.preventDefault();
	}
	handleChange = (event: any) => {
		this.setState({
			[event.target.name]: event.target.value,
		} as Pick<IWizardProp, keyof IWizardProp>);
	};

	handleChangeBodyShape = (event: BodyShapeType) => {
		this.setState({
			bodyShape: event,
		});
	};

	handleChangeTorsoLength = (event: TorsoType) => {
		this.setState({
			torsoLength: event,
		});
	};

	handleChangeFitPreference = (event: any) => {
		switch (event.target.value) {
			case '0':
				this.setState({ fitPreference: FitPreferenceType.Slim });
				break;
			case '1':
				this.setState({ fitPreference: FitPreferenceType.Average });
				break;
			default:
				this.setState({ fitPreference: FitPreferenceType.Loose });
				break;
		}
		this.setState({ fitSize: event.target.value });
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 5 ? currentStep + 1 : currentStep;
		this.setState({ currentStep });
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({ currentStep, error: false });
	};

	validateEmail = (event: any) => {
		const email = event.target.value;
		if (this.state.emailRegex.test(email)) {
			this.setState({ isValid: true, message: 'Your email looks good!' });
		} else {
			this.setState({ isValid: false, message: 'Please enter a valid email!' });
		}
		this.handleChange(event);
	}

	render() {
		return (
			<>
				{this.state.isLoading ? (
					<Loader />
				) : (
					<div className="container py-5" role="form">
						<div className="row">
							{this.state.currentStep === 1 && !this.state.error && (
								<PersonalInfo
									handleChange={this.handleChange}
									gender={this.state.gender}
									age={this.state.age}
									height={this.state.height}
									bodyWeight={this.state.bodyWeight}
									productCode={this.state.productCode}
									brandCode={this.state.brandCode}
								/>
							)}
							{this.state.currentStep === 2 && !this.state.error && (
								<BodyShape
									currentStep={this.state.currentStep}
									handleChange={this.handleChangeBodyShape}
									bodyShape={this.state.bodyShape}
									next={this._next}
								/>
							)}
							{this.state.currentStep === 3 && !this.state.error && (
								<TorsoLength
									currentStep={this.state.currentStep}
									handleChange={this.handleChangeTorsoLength}
									torsoLength={this.state.torsoLength}
									next={this._next}
								/>
							)}
							{this.state.currentStep === 4 && !this.state.error && (
								<FitPreference
									currentStep={this.state.currentStep}
									handleChange={this.handleChangeFitPreference}
									fitSize={this.state.fitSize}
									fitPreference={this.state.fitPreference}
								/>
							)}
							{this.state.currentStep === 5 && !this.state.error && (
								<Summary handleChange={this.validateEmail} {...this.state}
									isValid={this.state.isValid} message={this.state.message} />
							)}
							{this.state.currentStep === 6 && !this.state.error && (
								<ResponseSection
									data={this.state.data}
									productCode={this.state.productCode}
								/>
							)}
							{this.state.error === true && <Oops />}
						</div>
						<div className="clearfix" />
						<div className="row">
							{this.state.currentStep > 1 && this.state.currentStep < 7 && (
								<div className="col-auto">
									<PrevButton _prev={this._prev} />
								</div>
							)}
							{this.state.currentStep < 5 && (
								<div className="col-auto">
									<NextButton _next={this._next} />
								</div>
							)}
							{this.state.currentStep == 5 && (
								<div className="col-auto">
									<button
										type="button"
										onClick={this.handleSubmit}
										id="submit"
										className="btn btn-fitsme btnsoft arrowsize float-right"
									>
										&#8250; My size
									</button>
								</div>
							)}
							{this.state.currentStep == 6 && (
								<div className="aling-self-center">
								<div className="col-12 mx-sm-5 aling-self-center">
								
									<Link
										className="btn btn-fitsme"
										to={`/redirect/${this.state.brandCode}/${this.state.productCode}`}
										target="_parent"
									>
										Shop on saenguin
									</Link>
								
								</div>
								</div>
							)}
						</div>
					</div>
				)}
			</>
		);
	}
}
