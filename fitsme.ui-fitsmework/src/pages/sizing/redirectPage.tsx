import React from 'react';
import Loader from '../../components/loader/loader';
interface IRedirectPageProps {
	productCode: string;
	brandCode: string; //Later to get redirectURl from database
}
export default class RedirectPage extends React.Component<{}, IRedirectPageProps> {
	constructor(props: any) {
		super(props);
		this.state = { brandCode: props.match.params.brandCode, productCode: props.match.params.productCode }
	}
	componentDidMount() {
		window.location.href = `https://www.saenguin.com/products/${this.state.productCode}`;
	}
	render() {
		return (<Loader />)
	}
}