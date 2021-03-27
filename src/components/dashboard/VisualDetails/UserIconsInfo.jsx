import React from 'react';

const UserIconsInfo = ()=>{
    return(
        <div className="user-icon-info">
            <div className="row icon-list-items" style={{'marginTop': '1rem'}}>
                <div className="col m4 icon-items">
                    <ul className="icon-items">
                        <li className="item">
                            <span className="icon"><i className="fas fa-user"/></span>
                        </li>
                        <li className="item">
                            <span className="grey-text">All Users</span>
                        </li>
                        <li className="item">
                            <h5>1</h5>
                        </li>
                    </ul>
                </div>
                <div className="col m4 icon-items">
                    <ul className="icon-items">
                        <li className="item">
                            <span className="icon"><i className="fas fa-recycle"/></span>
                        </li>
                        <li className="item">
                            <span className="grey-text">Conversions</span>
                        </li>
                        <li className="item">
                            <div style={{'textAlign':'center'}}><span style={{'fontSize':'1.7rem', 'marginLeft':'1.5rem'}}>0</span><span className="grey-text">%</span></div>
                        </li>
                    </ul>
                </div>
                <div className="col m4 icon-items">
                    <ul className="icon-items">
                        <li className="item">
                            <span className="icon"><i className="fas fa-shopping-bag"/></span>
                        </li>
                        <li className="item">
                            <span className="grey-text">30 day sales</span>
                        </li>
                        <li className="item">
                            <h5>0</h5>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row icon-list-items">
                <div className="col m4 icon-items">
                    <ul className="icon-items">
                        <li className="item">
                            <span className="icon"><i className="fas fa-bell"/></span>
                        </li>
                        <li className="item">
                            <span className="grey-text">Avg time</span>
                        </li>
                        <li className="item">
                            <div style={{'textAlign':'center'}}><span style={{'fontSize':'1.7rem', 'marginLeft':'1.5rem'}}>0</span><span className="grey-text">  min</span></div>
                        </li>
                    </ul>
                </div>
                <div className="col m4 icon-items">
                    <ul className="icon-items">
                        <li className="item">
                            <span className="icon"><i className="far fa-clipboard"/></span>
                        </li>
                        <li className="item">
                            <span className="grey-text">All Users</span>
                        </li>
                        <li className="item">
                            <h5>0</h5>
                        </li>
                    </ul>
                </div>
                <div className="col m4 icon-items">
                    <ul className="icon-items">
                        <li className="item">
                            <span className="icon"><i className="fas fa-tags"/></span>
                        </li>
                        <li className="item">
                            <span className="grey-text">All Users</span>
                        </li>
                        <li className="item">
                            <h5>0</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserIconsInfo;