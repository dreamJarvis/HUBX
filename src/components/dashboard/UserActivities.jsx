import React from 'react';
import UserGraphInfo from "./VisualDetails/UserGraphInfo";
import UserIconsInfo from "./VisualDetails/UserIconsInfo";

const UserActivities = ()=>{
    return(
        <div className="user-activity">
            <div className="row user-activities">
                <div className="col m8 activity left">
                    <UserGraphInfo/>
                </div>
                <div className="col m4 activity right">
                    <UserIconsInfo/>
                </div>
            </div>
        </div>
    );
};

export default UserActivities;