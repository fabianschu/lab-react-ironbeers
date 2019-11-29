import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Link to="/beers">Beers</Link>
                <br/>
                <Link to="/random-beer">Random Beer</Link>
                <br/>
                <Link to="/new-beer">New Beer</Link>
            </div>
        )
    }
}