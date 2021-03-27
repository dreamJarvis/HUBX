import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import TotalInvitePiechart from "./TotalInvitePiechart";

class Modal extends Component {
	state = {
		totalNumberOfInvites: 80,
		durationOfEvent : 40,
		userName : '',
		UserEmail: ''
	}

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

	setValues = (e)=>{
		this.setState({
			[e.target.id] : e.target.value
		})
	}

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
							<div className="col m6 invite-user-details">
								<div className="row">
									<div className="input-field col m12 s12 invite-userName">
										<div className="input-field col m12 s12">
											<label htmlFor="updatedUserName">Name</label>
											<input value={this.state.userName} id="userName" type="text" className="validate center-align" onChange={this.setValues}/>
										</div>
										<div className="input-field col m12 s12 invite-userEmail">
											<label htmlFor="updatedUserPhoneNumber">Email Id</label>
											<input value={this.state.UserEmail} id="UserEmail" type="email" className="validate center-align" onChange={this.setValues}/>
										</div>
									</div>
								</div>
								<div className="invite-stats">
									<div className="col s6 m6">
										<p className="grey-text">Total Invites : <span>{this.state.totalNumberOfInvites}</span></p>
									</div>
									<div className="col s6 m6">
										<p className="grey-text">Event Duration : <span>{this.state.durationOfEvent}</span></p>
									</div>
								</div>
							</div>
							<div className="col m6 invite-pie-chart center-align">
								<TotalInvitePiechart totalNumberOfInvites={this.state.totalNumberOfInvites} durationOfEvent={this.state.durationOfEvent}/>
								<label className="price-calc">Total Invite Statistics</label>
							</div>
						</div>
					</div>
					<div className="modal-footer center-align">
						<a href="#" className="modal-close btn btn-danger">
							Invite
						</a>
					</div>
				</div>
			</div>
		);
	}
}


export default Modal;