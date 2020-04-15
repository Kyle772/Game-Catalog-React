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

    render() {
        return (
            <section className="floating bottom">
                <button className="wheelspin wheelActivate"></button>
                <button onClick={this.elChatButtonActivate} className="chat chatActivate"><img src={ChatIcon}/></button>
            </section>
        )
    }
}