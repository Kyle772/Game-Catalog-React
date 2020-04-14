import React, { Component } from 'react';
import Collapse from '../assets/collapsechat.png';
import Close from '../assets/close.png';
import DefProfilePhoto from '../assets/defaultprofile.png';
import Send from '../assets/send.png';

export default class Chat extends Component {
    render() {
        return (
            <div id="ChatWindow">
                <div class="top">
                    <button class="collapse chatCollapse"><img src={Collapse} /></button>
                    <button class="close chatDeactivate"><img src={Close} /></button>
                </div>
                <div class="chat-messages">
                    <div class="chat-message to-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                    <div class="chat-message from-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                    <div class="chat-message from-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                    <div class="chat-message from-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                    <div class="chat-message from-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                    <div class="chat-message from-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                    <div class="chat-message from-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                    <div class="chat-message from-me">
                        <img class="profile-photo" src={DefProfilePhoto}/>
                        <p class="chat-content">This is a test message</p>
                    </div>
                </div>
                <div class="bottom">
                    <input placeholder="Type your message here..." type="text"></input>
                    <button class="send-chat-message"><img src={Send}/></button>
                </div>
            </div>
        )
    }
}