import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = props => {
    const [isDropdownCollapsed, setIsDropdownCollapsed] = useState(true);
    const handleDropdownCollapse = (e) => {
        e.preventDefault();
        setIsDropdownCollapsed(!isDropdownCollapsed);
    }
    return (
        <>
            <h4 className="title text-center font-weight-bold"><Link exact to="/">kelvin<span>_</span>kellner<span>.</span></Link></h4>
            <ul class="menu">
                <li><NavLink exact to="/" activeClassName="active">about me<span>.</span></NavLink></li>
                <li><Link onClick={ e => handleDropdownCollapse(e) }>projects<span>.</span></Link></li>
                <ul class={`menu dropdown${isDropdownCollapsed ? ' collapse' : ''}`}>
                    <li>ux design<span>.</span></li>
                    <li>development<span>.</span></li>
                    <li>graphic design<span>.</span></li>
                </ul>
                <li><NavLink to="/hobbies" activeClassName="active">hobbies<span>.</span></NavLink></li>
                <li style={{ marginTop: "2vh" }}><NavLink to="/contact" activeClassName="active">contact me<span>.</span></NavLink></li>
            </ul>
        </>
        );
  };
  export default Sidebar