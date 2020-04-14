import React, { Component } from 'react'

export default class FloatingBar extends Component {
    render() {
        return (
            <section class="floating bottom">
                <button class="wheelspin wheelActivate"></button>
                <button class="chat chatActivate"><img src="./assets/chat_icon.png"/></button>
            </section>
        )
    }
}