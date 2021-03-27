import React from "react";

const NewUsers = ()=>{
	return (
		<div className="new-users">
			<div className="new-users-header">
				<ul className="new-users-header-items">
					<li className="new-user-icon">
						<i className="fas fa-user"/>
					</li>
					<li><span>New User</span></li>
					<li>
						<span className="see-all">see all</span>
					</li>
				</ul>
			</div>
			<div className="new-users-footer">
				<span className="smiley-icon"><i className="fas fa-smile-beam"/></span>
				<div className="footer-content">
					<i>hubx </i>
					<i>24 minutes</i>
				</div>
			</div>
		</div>
	);
};

export default NewUsers;