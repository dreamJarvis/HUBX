import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
	componentDidMount() {
		const options = {
			inDuration: 250,
			outDuration: 250,
			opacity: 0.5,
			dismissible: true,
			startingTop: "10%",
			endingTop: "15%"
		};
		M.Modal.init(this.Modal, options);
	}

	render() {
		return (
			<div>
				<div ref={Modal => {
					this.Modal = Modal;
				}}
					 id="userInfoUpdateModal"
					 className="modal"
				>
					<div className="modal-content right-align">
						<div className="modal-title center-align">
							<h5 className="row orange-text text-darken-2">Price Calculator</h5>
						</div>
						<div className="row right-align">
							<div className="input-field col m12 s12">
								<div className="input-field col m12 s12">
									<label htmlFor="updatedUserName">User name</label>
									<input id="updatedUserName" type="text" className="validate center-align"/>
								</div>
								<div className="input-field col m12 s12">
									<label htmlFor="updatedUserPhoneNumber">User name</label>
									<input id="updatedUserPhoneNumber" type="email" className="validate center-align"/>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer center-align">
						<a className="modal-close btn btn-danger">
							Apply changes
						</a>
					</div>
				</div>
			</div>
		);
	}
}


export default Modal;