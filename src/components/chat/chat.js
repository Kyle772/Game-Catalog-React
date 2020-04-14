import React, { Component } from 'react'

export default class Chat extends Component {
    render() {
        return (
            <div id="ChatWindow">
        <div class="top">
            <button class="collapse chatCollapse"><img src="./assets/collapsechat.png" /></button>
            <button class="close chatDeactivate"><img src="./assets/close.png" /></button>
        </div>
        <div class="chat-messages">
            <div class="chat-message to-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
            <div class="chat-message from-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
            <div class="chat-message from-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
            <div class="chat-message from-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
            <div class="chat-message from-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
            <div class="chat-message from-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
            <div class="chat-message from-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
            <div class="chat-message from-me">
                <img class="profile-photo" src="./assets/defaultprofile.png"/>
                <p class="chat-content">This is a test message</p>
            </div>
        </div>
        <div class="bottom">
            <input placeholder="Type your message here..." type="text"></input>
            <button class="send-chat-message"><img src="./assets/send.png"/></button>
        </div>
    </div>
        )
    }
}