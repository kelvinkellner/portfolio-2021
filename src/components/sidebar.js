import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown as ArrowDown, FaChevronUp as ArrowUp } from 'react-icons/fa';

const Sidebar = props => {
    const [isDropdownCollapsed, setIsDropdownCollapsed] = useState(true);
    const handleDropdownCollapse = (e) => {
        e.preventDefault();
        setIsDropdownCollapsed(!isDropdownCollapsed);
    }
    return (
        <>
            <h4 className="title text-center font-weight-bold"><Link exact to="/">kelvin<span>_</span>kellner<span>.</span></Link></h4>
            <ul className="menu">
                <li><NavLink to="/about" activeClassName="active">about me<span>.</span></NavLink></li>
                <li><NavLink to="/projects" activeClassName="active" onClick={ e => handleDropdownCollapse(e) }>
                    {isDropdownCollapsed ? <ArrowDown className="dropdown-arrow" /> : <ArrowUp className="dropdown-arrow" /> }
                    projects<span>.</span>
                    </NavLink></li>
                <ul className={`menu dropdown${isDropdownCollapsed ? ' collapse' : ''}`}>
                    <li><NavLink to="/ux" activeClassName="active">ux design<span>.</span></NavLink></li>
                    <li><NavLink to="/dev" activeClassName="active">development<span>.</span></NavLink></li>
                    <li><NavLink to="/graphics" activeClassName="active">graphic design<span>.</span></NavLink></li>
                    </ul>
                <li><NavLink to="/hobbies" activeClassName="active">hobbies<span>.</span></NavLink></li>
                <li style={{ marginTop: "2vh" }}><NavLink to="/contact" activeClassName="active">contact me<span>.</span></NavLink></li>
            </ul>
        </>
        );
  };
  export default Sidebar