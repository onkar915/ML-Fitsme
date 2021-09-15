import React from 'react';
import CalculateSize from './calculateSize';
export default function Popup(props: any) {
	return (
		<>
			<div className={`modal ${props.modal}  modal-md container-fluid`} role="dialog" id="popUp">
				<div className="modal-dialog modal-dialog-centered " role="document">
					<div className="modal-content modal-body border-0 p-0 modal-dialog-scrollable">
						<CalculateSize {...props} />
						<button
							type="button"
							className="btnclose  btn-secondary"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							X
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
