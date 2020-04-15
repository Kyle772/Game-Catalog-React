import React, { Component } from 'react';
import Collapse from '../assets/collapsechat.png';
import Close from '../assets/close.png';
import DefProfilePhoto from '../assets/defaultprofile.png';
import Send from '../assets/send.png';
import './chat.scss';

export default class Chat extends Component {
    elChatButtonCollapse() {
        var elChat = document.querySelector('#ChatWindow');
        elChat.classList.toggle('collapse');
        elChat.focus();
    }
    elChatButtonDeactivate() {
        var elChat = document.querySelector('#ChatWindow');
        var elChatButtonActivate = document.querySelector('.chatActivate');
        elChat.classList.toggle('active');
        elChat.classList.remove('collapse');
        elChatButtonActivate.classList.toggle('hide');
    }

    render() {
        return (
            <div id="ChatWindow">
                <div className="top">
                    <button onClick={this.elChatButtonCollapse} className="collapse chatCollapse"><img src={Collapse} /></button>
                    <button onClick={this.elChatButtonDeactivate} className="close chatDeactivate"><img src={Close} /></button>
                </div>
                <div className="chat-messages">
                    <div className="chat-message to-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                    <div className="chat-message from-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                    <div className="chat-message from-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                    <div className="chat-message from-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                    <div className="chat-message from-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                    <div className="chat-message from-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                    <div className="chat-message from-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                    <div className="chat-message from-me">
                        <img className="profile-photo" src={DefProfilePhoto}/>
                        <p className="chat-content">This is a test message</p>
                    </div>
                </div>
                <div className="bottom">
                    <input placeholder="Type your message here..." type="text"></input>
                    <button className="send-chat-message"><img src={Send}/></button>
                </div>
            </div>
        )
    }
}