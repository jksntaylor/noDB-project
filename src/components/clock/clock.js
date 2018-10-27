import React, { Component } from 'react';
import axios from 'axios'



class Clock extends Component {
    constructor () {
        super ()
        this.state = {
            hour: 0,
            amPm: 'AM',
            minute: 0,
            month: 0,
            date: 0,
            year: 0,
            monthName: ''
        }
        this.getTime = this.getTime.bind(this);
    }

    getTime() {
       axios.get('http://worldclockapi.com/api/json/mst/now').then(res => {
            let { currentDateTime } = res.data;
            var dateObj = new Date(currentDateTime)
            var hour = dateObj.getHours();
            if (hour>12) {
                hour -=12;
                this.setState({amPm: 'PM'})
            } else if (hour===0) {
                hour = 12;
                this.setState({amPm: 'PM'})
            };
            var minute = dateObj.getMinutes();
            var month = dateObj.getMonth();
            let monthArr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
            var monthName = monthArr[month];
            var day = dateObj.getDay();
            var year = dateObj.getFullYear();
            this.setState({
                hour: hour,
                minute: minute,
                month: monthName,
                date: day,
                year: year
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
                <div className="time">
                    <h1 className="hour">{this.state.hour}</h1>
                    <h1 className="minute">{this.state.minute}</h1>
                    <h1 className="amPm">{this.state.amPm}</h1>
                </div>
                <div className="date">
                    <h1 className="month">{this.state.month}</h1>
                    <h1 className="day">{this.state.date}</h1>
                    <h1 className="year">{this.state.year}</h1>
                </div>
            </div>
        )
    }
}

export default Clock;