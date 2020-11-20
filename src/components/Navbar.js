import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
export default class Home extends Component {
    render() {
        return (
            <div className="container">
               <nav className="nav-wrapper red darken-3">
                    <div className="container">
                        <a  className="brand-logo">Mi website</a>
                        <ul className="right">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
               </nav>
            </div>
        )
    }
}
