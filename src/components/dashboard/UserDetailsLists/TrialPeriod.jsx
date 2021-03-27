import React from "react";

const TrialPeriod = ()=>{
	return (
		<div className="trial-period row">
			<div className="col s12 trial-period-content">
				<div className="row content-container">
					<div className="col m4 icon-header">
						<span className="grey-text text-darken-3 trial-period-heading">Trial Period</span>
						<div className="days-countdown z-depth-2">
							<span>30</span>
							<i>days left</i>
						</div>
					</div>
					<div className="col m6"/>
					<div className="col m2 hourglass">
						<i className="far fa-hourglass"/>
					</div>
				</div>
				<div className='button-row'>
					<div className="col m6"/>
					<div className="col m6 upgrade-btn left-align">
						<button className="btn pink darken-1">Upgrade now!
							<i className="material-icons right">send</i>
						</button>
					</div>
				</div>
			</div>
			<div className="col s12 online-users">
				<div className="online-users-header">
					<ul className="online-users-header-items">
						<li className="online-user-icon">
							<i className="fas fa-user"/>
						</li>
						<li><p>online users <span>(1)</span></p></li>
					</ul>
				</div>
				<div className="online-users-footer">
					<span className="smiley-icon"><i className="fas fa-smile-beam"/></span>
					<div className="footer-content">
						<i>hubx</i>
					</div>
					<div className="contact-btn col m5">
						<button className="btn teal darken-1">contact</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrialPeriod;