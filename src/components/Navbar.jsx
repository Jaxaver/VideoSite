import React, { Component } from "react"
import LogBar from "./LogBar";
import { useAuth0 } from "@auth0/auth0-react"

class Navbar extends Component {


    render() {

        return (
            <nav
                className="navbar container-fluid bg-primary align-items-center text-light border-bottom px-3"
            >
                <span
                    className="navbar-brand responsive-text"
                    onClick={()=>this.props.onUnselectTitle()}
                >
                    Video Site
                </span>
                <span>jrmajano@gmail.com</span>
                <div
                    className="row bg-secondary justify-content-between"
                >
                    <LogBar />
                </div>


            </nav>

        );
    }
}

export default Navbar;