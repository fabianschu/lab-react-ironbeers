import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        const headerStyle = {
            width: "100%",
            backgroundColor: "lightblue"
        }

        return (
            <div style={headerStyle}>
                <Link to="/">Home</Link>
            </div>
        )
    }
}
