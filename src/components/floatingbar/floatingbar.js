import React, { Component } from 'react';
import ChatIcon from '../assets/chat_icon.png';



export default class FloatingBar extends Component {
    elChatButtonActivate() {
        var elChat = document.querySelector('#ChatWindow');
        var elChatButtonActivate = document.querySelector('.chatActivate');
        elChat.classList.toggle('active');
        elChatButtonActivate.classList.toggle('hide');
        elChat.focus();
    }

    elWheelButtonActivate() {
        var wheel1 = document.querySelector('.modalCover');
        var wheel2 = document.querySelector('#SpinWheel');
        wheel1.classList.toggle('active');
        wheel2.classList.toggle('active');
    }

    render() {
        return (
            <section className="floating bottom">
                <button onClick={this.elWheelButtonActivate} className="wheelspin wheelActivate"></button>
                <button onClick={this.elChatButtonActivate} className="chat chatActivate"><img src={ChatIcon}/></button>
            </section>
        )
    }
}