import React, { Component } from 'react';
import './Timer.module.css';


class Timer extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0,
            minutes: 0,
            seconds:0
        }
        this.hoursInput = React.createRef();
        this.minutesInput= React.createRef();
        this.secondsInput = React.createRef();
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    convertToSeconds = ( hours, minutes,seconds) => {
        return seconds + minutes * 60 + hours * 60 * 60;
    }

    startTimer = () => {
        this.timer = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        const  { hours, minutes, seconds } = this.state;
        let c_seconds = this.convertToSeconds(hours, minutes, seconds);

        if(c_seconds) {

            // изменение секунд
            seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});

            // изменение минут
            if(c_seconds % 60 === 0 && minutes) {
                this.setState({minutes: minutes -1});
            }

            if(!minutes && hours) {
                this.setState({minutes: 59});
            }

            // Выбор часа
            if(c_seconds % 3600 === 0 && hours) {
                this.setState({hours: hours-1});
            }

        } else {
            clearInterval(this.timer);
        }
    }


    stopTimer = () => {
        clearInterval(this.timer);
    }

    resetTimer = () => {
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0
        });
        this.hoursInput.current.value = 0;
        this.minutesInput.current.value = 0;
        this.secondsInput.current.value = 0;
    }


    render() {
        const { hours, minutes, seconds } = this.state;

        return (
            <div className="Timer">
                <h1 className="title"> Обратный отсчет </h1>
                <div className="inputGroup">
                    <h3>Часы</h3>
                    <input ref={this.hoursInput} type="number" placeholder={0}  name="hours"  onChange={this.inputHandler} />
                    <h3>Минуты</h3>
                    <input  ref={this.minutesInput} type="number"  placeholder={0}   name="minutes"  onChange={this.inputHandler} />
                    <h3>Секунды</h3>
                    <input   ref={this.secondsInput} type="number"  placeholder={0}  name="seconds"  onChange={this.inputHandler} />
                </div>
                <div1 className="buttonStyle">
                    <button onClick={this.startTimer} className="start">start</button>
                    <button onClick={this.stopTimer}  className="stop">stop</button>
                    <button onClick={this.resetTimer}  className="reset">reset</button>
                </div1>
                <h1> Timer {hours}: {minutes} : {seconds} </h1>
            </div>

        );
    }
}

export default Timer;

