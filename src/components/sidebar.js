import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const Sidebar = props => {

    return (
        <>
            <h4 className="title text-center font-weight-bold"><Link to="/">kelvin<span>_</span>kellner<span>.</span></Link></h4>
            <ul class="menu">
                <li><NavLink exact to="/" activeClassName="active">about me.</NavLink></li>
                <li><NavLink exact to="/projects" activeClassName="active">projects.</NavLink></li>
                <li><NavLink to="/hobbies" activeClassName="active">hobbies.</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">contact.</NavLink></li>
            </ul>
        </>
        );
  };
  export default Sidebar