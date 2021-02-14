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
            <h4 className="title text-center font-weight-bold"><Link to="/">kelvin<span>_</span>kellner<span>.</span></Link></h4>
            <ul class="menu">
                <li><NavLink exact to="/" activeClassName="active">about me.</NavLink></li>
                <li><Link onClick={ e => handleDropdownCollapse(e) }>projects.</Link></li>
                <ul class={`menu dropdown${isDropdownCollapsed ? ' collapse' : ''}`}>
                    <li>ux design.</li>
                    <li>software development.</li>
                    <li>graphic design.</li>
                </ul>
                <li><NavLink to="/hobbies" activeClassName="active">hobbies.</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">contact.</NavLink></li>
            </ul>
        </>
        );
  };
  export default Sidebar