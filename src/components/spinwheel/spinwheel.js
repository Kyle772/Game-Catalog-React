import React, { Component } from 'react'
import BackButton from '../assets/arrow-left.png';


export default class SpinWheel extends Component {
    render() {
        return (
            <div id="SpinWheel" className="shadow modal">
                <div className="top">
                    <button className="back wheelDeactivate"><img src={BackButton} /></button>
                    <p>Sorry, you need to place 100 bets before you can spin!</p>
                </div>
            </div>
        )
    }
}