import React, { Component } from 'react'
import axios from 'axios'
const config = require('../../config')


class Weather extends Component {
    constructor () {
        super()
        this.state = {
            temperature: 0,
            iconCode: '',
            location: ''

        }
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=84117&units=imperial&APPID=${config.weatherKey}`).then(results => {
            this.setState({
                temperature: Math.floor(results.data.main.temp),
                iconCode: results.data.weather[0].icon,
                location: results.data.name
            })
        })
    }

    render() {
        if (this.state.iconCode === '01n'||this.state.iconCode==='01d') {
            return (
                <div className='weather-component'>
                    <div className='weather-top'>
                        <i className="fas fa-sun fa-2x"></i>
                        <h1 className='temperature'>{this.state.temperature}</h1>
                        <h1 className='degreeSymbol'>&deg;</h1>
                    </div>
                    <div className='weather-bottom'>
                        <h2 className='location'>{this.state.location}</h2>
                    </div>
                </div>
            )
        } else if (this.state.iconCode === '02d'||this.state.iconCode==='02n') {
            return (
                <div className='weather-component'>
                    <div className='weather-top'>
                        <i className="fas fa-cloud-sun fa-2x"></i>
                        <h1 className='temperature'>{this.state.temperature}</h1>
                        <h1 className='degreeSymbol'>&deg;</h1>
                    </div>
                    <div className='weather-bottom'>
                        <h2 className='location'>{this.state.location}</h2>
                    </div>
                </div>
            )
        } else if (this.state.iconCode === '03d'||this.state.iconCode === '03n'||this.state.iconCode === '04d'||this.state.iconCode === '04n'||this.state.iconCode === '50d'||this.state.iconCode === '50n') {
            return (
                <div className='weather-component'>
                    <div className='weather-top'>
                        <i className="fas fa-cloud fa-2x"></i>
                        <h1 className='temperature'>{this.state.temperature}</h1>
                        <h1 className='degreeSymbol'>&deg;</h1>
                    </div>
                    <div className='weather-bottom'>
                        <h2 className='location'>{this.state.location}</h2>
                    </div>
                </div>
            )
        } else if (this.state.iconCode === '09d'||this.state.iconCode === '09n'||this.state.iconCode === '10d'||this.state.iconCode === '10n') {
            return (
                <div className='weather-component'>
                    <div className='weather-top'>
                        <i className="fas fa-tint fa-2x"></i>
                        <h1 className='temperature'>{this.state.temperature}</h1>
                        <h1 className='degreeSymbol'>&deg;</h1>
                    </div>
                    <div className='weather-bottom'>
                        <h2 className='location'>{this.state.location}</h2>
                    </div>
                </div>
            )
        } else if (this.state.iconCode === '11d'||this.state.iconCode === '11n') {
            return (
                <div className='weather-component'>
                    <div className='weather-top'>
                        <i className="fas fa-bolt fa-2x"></i>
                        <h1 className='temperature'>{this.state.temperature}</h1>
                        <h1 className='degreeSymbol'>&deg;</h1>
                    </div>
                    <div className='weather-bottom'>
                        <h2 className='location'>{this.state.location}</h2>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='weather-component'>
                    <div className='weather-top'>
                        <i className="fas fa-snowflake fa-2x"></i>
                        <h1 className='temperature'>{this.state.temperature}</h1>
                        <h1 className='degreeSymbol'>&deg;</h1>
                    </div>
                    <div className='weather-bottom'>
                        <h2 className='location'>{this.state.location}</h2>
                    </div>
                </div>
            )
        }
    }
}

export default Weather;
