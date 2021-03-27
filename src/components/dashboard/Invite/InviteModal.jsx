import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import TotalInvitePiechart from "./TotalInvitePiechart";

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
	};

	render() {
		return (
			<div>
				<div ref={Modal => {
					this.Modal = Modal;
				}}
					 id="userInfoUpdateModal"
					 className="modal invite"
				>
					<div className="modal-content right-align invite-info">
						<div className="modal-title center-align invite-header">
							<h5 className="row orange-text text-darken-2">Invite form</h5>
						</div>
						<div className="row right-align invite-content">
							<TotalInvitePiechart/>
						</div>
					</div>
					<div className="modal-footer center-align">
						<button className="modal-close btn btn-danger" data-target="userInfoUpdateModal">invite</button>
					</div>
				</div>
			</div>
		);
	}
}


export default Modal;