import React, { Component } from 'react'
import Header from './Header';
import axios from "axios";
import BeerDetail from './BeerDetail';

export default class Beer extends Component {
    
    state = {
        beer: ""
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                console.log(response.data);
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <Header />
                <BeerDetail beer={this.state.beer} />
            </div>
        )
    }
}
