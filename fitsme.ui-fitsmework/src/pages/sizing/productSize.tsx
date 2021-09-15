import React, { Component } from 'react';
const ProductSize = (props: any) => {
	var notes = props.data.map((item: any, i: any) => {
		return (
			<li className="list-inline-item" key={i}>
				<h6 className="btn productbtn btn-size ">{item.productSize}</h6>
			</li>
		)
	});
	return (
		<div className="sizebtn mt-3">


			{notes}

		</div>
	);
}

export default ProductSize