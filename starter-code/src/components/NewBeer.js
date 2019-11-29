import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';

export default class NewBeer extends Component {
    
    state= {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        number: "",
        attenuation_level: "",
        contributed_by: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        console.log("submit")
        this.createBeer();
    }

    createBeer = beer => {
        console.log("juhu");
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    render() {

        const formStyle= {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "70vh"
        }

        const inputStyle = {
            border: "1px solid black",
            height: "30px",
            width: "50vw",
            borderRadius: "10px"
        }

        const buttonStyle = {
            border: "1px solid black",
            height: "30px",
            width: "50vw",
            borderRadius: "10px",
            backgroundColor: "lightblue"
        }

        return (
            <div>
                <Header />
                <div style={formStyle}>
                    <input style={inputStyle} type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
                    <input style={inputStyle} type="text" placeholder="Tagline" name="tagline" onChange={this.handleChange} value={this.state.tagline}/>
                    <input style={inputStyle} type="text" placeholder="Description" name="description" onChange={this.handleChange} value={this.state.description}/>
                    <input style={inputStyle} type="text" placeholder="First brewed" name="first_brewed" onChange={this.handleChange} value={this.state.first_brewed}/>
                    <input style={inputStyle} type="text" placeholder="Brewers Tips" name="brewers_tips" onChange={this.handleChange} value={this.state.brewers_tips}/>
                    <input style={inputStyle} type="number" placeholder="Attenuation Level" name="attenuation_level" onChange={this.handleChange} value={this.state.attenuation_level}/>
                    <input style={inputStyle} type="text" placeholder="Contributed by" name="contributed_by" onChange={this.handleChange} value={this.state.contributed_by}/>
                    <button style={buttonStyle} onClick={this.handleSubmit}>Hi</button>
                </div>
            </div>
        )
    }
}
