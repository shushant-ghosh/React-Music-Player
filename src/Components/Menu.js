import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark navbar-expand-md bg-info fixed-top">
                <Link to="/" className="navbar-brand">
                    React Reference Router
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                {props.children}
            </div>
        </React.Fragment>
    )
}
export default Menu