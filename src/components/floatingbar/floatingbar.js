import React, { Component } from 'react';
import ChatIcon from '../assets/chat_icon.png';



export default class FloatingBar extends Component {
    render() {
        return (
            <section class="floating bottom">
                <button class="wheelspin wheelActivate"></button>
                <button class="chat chatActivate"><img src={ChatIcon}/></button>
            </section>
        )
    }
}