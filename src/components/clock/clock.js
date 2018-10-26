import React, { Component } from 'react';
import axios from 'axios'



class Clock extends Component {
    constructor () {
        super ()
        this.state = {
            hour: 0,
            minute: 0,
            month: 0,
            date: 0

        }
        this.getTime = this.getTime.bind(this);
    }

    getTime() {
       axios.get('http://worldclockapi.com/api/json/mst/now').then(res => {
            let { currentDateTime } = res.data;
            var date = new Date(currentDateTime)
            this.setState({
                hour: date.getHours(),
                minute: date.getMinutes(),
                month: date.getMonth()+1,
                date: date.getDate(),
            })
           })
           
    }

    componentDidMount() {
        this.getTime();
        window.setInterval(this.getTime,1000);  
    }

    render() {
        return (
            <div>
                <h1>{this.state.hour}</h1>
                <h1>{this.state.minute}</h1>
                <h1>{this.state.month}</h1>
                <h1>{this.state.date}</h1>
            </div>
        )
    }
}

export default Clock;