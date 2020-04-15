import React, { Component } from 'react'
import BackButton from '../assets/arrow-left.png';


export default class SpinWheel extends Component {
    elWheelButtonDeactivate() {
        var wheel1 = document.querySelector('.modalCover');
        var wheel2 = document.querySelector('#SpinWheel');
        wheel1.classList.remove('active');
        wheel2.classList.remove('active');
    }

    render() {
        return (
            <div id="SpinWheel" className="shadow modal">
                <div className="top">
                    <button onClick={this.elWheelButtonDeactivate} className="back wheelDeactivate"><img src={BackButton} /></button>
                    <p>Sorry, you need to place 100 bets before you can spin!</p>
                </div>
            </div>
        )
    }
}