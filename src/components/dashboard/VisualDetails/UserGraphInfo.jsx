import React from 'react';
import NavbarDropdown from '../NavbarDropdown';
import LinearGraph from "./LinearGraph";

const UserGraphInfo = ()=>{
    return(
        <div className="user-graph-info">
            <div className="user-info-navbar">
                <NavbarDropdown/>
            </div>
            <div className="line-graph">
                <LinearGraph/>
            </div>
        </div>
    );
};

export default UserGraphInfo;