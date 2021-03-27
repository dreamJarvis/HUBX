import React from "react";

const EventLogs = ()=>{
	return (
		<div className="event-logs">
			<div className="event-logs-header">
				<ul className="event-logs-header-items">
					<li className="new-user-icon">
						<i className="fas fa-chart-line"/>
					</li>
					<li><span>Event logs</span></li>
					<li>
						<span className="see-all">see all</span>
					</li>
				</ul>
			</div>
			<div className="event-logs-footer row">
				<div className="col m9 log-data">
					<span className="key-icon"><i className="fas fa-key"/></span>
					<div className="footer-content">
						<i style={{"color":"#40e0d0"}}>hubx </i>
						<i>logged in</i>
						<i style={{"color":"#40e0d0"}}>More info</i>
					</div>
				</div>
				<div className="col m3">
					<span className="right-align grey-text"><i>22 minutes ago</i></span>
				</div>
			</div>
		</div>
	);
};

export default EventLogs;