import React, { Component } from 'react'
import BackButton from '../assets/arrow-left.png';


export default class SpinWheel extends Component {
    render() {
        return (
            <div id="SpinWheel" class="shadow modal">
                <div class="top">
                    <button class="back wheelDeactivate"><img src={BackButton} /></button>
                    <p>Sorry, you need to place 100 bets before you can spin!</p>
                </div>
            </div>
        )
    }
}