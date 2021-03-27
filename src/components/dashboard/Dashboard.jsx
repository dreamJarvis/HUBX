import React from 'react';
import '../../assets/SCSS/Dashboard.scss';
import UserActivities from "./UserActivities";
import UserTextualData from "./UserDetailsLists/UserTextualData";
import InviteModal from "./Invite/InviteModal";

const Dashboard = ()=>{
    return(
        <div className="dashboard">
            <nav className="white z-depth-0">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo black-text">Dashboard</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li className="flow-text"><a href="#"><i className="fas fa-plus"/>Create Course</a></li>
                        <li className="flow-text"><a href="#"><i className="far fa-eye"/>Preview home page</a></li>
                        <li className="flow-text"><a href="#"><i className="far fa-eye"/>Preview after login page</a></li>
                        <li className="flow-text"><a href="#"><i className="fas fa-power-off"/>View welcome screen</a></li>
                    </ul>
                    <ul id="help-icon" className="right hide-on-med-and-down">
                        <li><a href="#"><i className="fas fa-question"/>Help</a></li>
                    </ul>
                </div>
            </nav>

            <div className="row dashboard-content">
                <div className="col m12 dashboard-visual-content">
                    <UserActivities/>
                </div>
                <div className="col m12 dashboard-text-content">
                    <div className="text-content">
                        <UserTextualData/>
                    </div>
                </div>
            </div>

            <div className="invite-btn">
                {/*<a href="#" className="modal-trigger btn btn-large" data-target="userInfoUpdateModal">invite*/}
                {/*    <i className="material-icons right">add</i>*/}
                {/*</a>*/}
                <button className="modal-trigger btn btn-large" data-target="userInfoUpdateModal">invite
                    <i className="material-icons right">add</i>
                </button>
                <InviteModal/>
            </div>
        </div>
    );
};

export default Dashboard;