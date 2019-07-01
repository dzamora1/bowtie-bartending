import React, { Component } from "react";
import './Nav.css';

class Nav  extends Component {
render () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/">Bow Tie Bartending</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="$navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/about_us">About Us <span class="sr-only">(current)</span></a>
                     </li>
                    <li className="nav-item active">
                         <a className="nav-link" href="/packages">Packages <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/pricing">Pricing <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/interact">Interact <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
            <div className="content">

            </div>

        </nav>
    )
    }
}

export default Nav;