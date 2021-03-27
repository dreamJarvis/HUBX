import React, { useEffect } from "react";
import M from "materialize-css";

const NavbarDropdown = () => {
    useEffect(() => {
        let dropdowns = document.querySelectorAll(".dropdown-trigger");
        let options = {
            inDuration: 300,
            outDuration: 225,
            hover: true,
            belowOrigin: true
        };
        M.Dropdown.init(dropdowns, options);

    }, []);

    return (
        <div className="user-graph-navbar-main">
            <nav className="white darken-2 z-depth-0">
                <div className="nav-wrapper user-graph-navbar">
                    <a href="#" className="brand-logo grey-text flow-text user-graph-navbar-header">
                        <i className="far fa-calendar-alt"/>
                        Your School
                    </a>
                    <ul
                        id="nav-mobile"
                        className="right hide-on-med-and-down"
                    >
                        <li className="flow-text menu-item"><a href="#">New Signups</a></li>
                        <li className="flow-text menu-item"><a href="#">Revenue</a></li>
                        <li className="flow-text menu-item"><a href="#">Product Sales</a></li>
                        <li className="flow-text menu-item"><a href="#">Active learners</a></li>
                        <li className="flow-text menu-item-dropdown">
                            <div
                                id="FirstDropDown"
                                className="dropdown-trigger black-text dropdown-link"
                                href="#"
                                data-target="dropdown1"
                                onMouseEnter={e => {
                                    const inst = M.Dropdown.getInstance(e.target);
                                    inst && inst.open();
                                }}
                            >
                                <div id="fuckThis" className="dropdown-header-content">
                                    <span className="dropdown-text">Last 7 days</span>
                                    <i className="material-icons right">arrow_drop_down</i>
                                </div>
                            </div>
                            <ul
                                id="dropdown1"
                                className="dropdown-content"
                            >
                                <li><a href="#">one</a></li>
                                <li><a href="#">two</a></li>
                                <li><a href="#">three</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarDropdown;