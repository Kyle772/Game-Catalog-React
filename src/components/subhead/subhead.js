import React, { Component } from 'react'

export default class SubHeader extends Component {
    render() {
        return (
            <header class="secondary">
        <div class="container">
            <button class="row">
              <img src="./assets/diamond.png" />
              <span>Video Slots</span>
          </button>
            <button class="row">
              <img src="./assets/dice.png" />
              <span>Table Games</span>
          </button>
            <button class="row">
              <img src="./assets/slots.png" />
              <span>Classic Slots</span>
          </button>
            <button class="row">
              <img src="./assets/poker.png" />
              <span>Video Poker</span>
          </button>
            <button class="row">
              <img src="./assets/scratch.png" />
              <span>Scratch Cards</span>
          </button>
            <button class="row mar">
              <img src="./assets/jackpot.png" />
              <span>Jackpot Games</span>
          </button>
            <button class="balance rounded"><span class="text">Balance:</span> <span class="currency">$78.55</span><span class="refresh"></span></button>
            <button class="notification rounded"> </button>
            <button class="profile rounded" target="account-dropdown">lawrence.do</button>
            <div id="account-dropdown">
                <button><a href="./favorited.html"><img src="../assets/favorite.svg"/>Favorites</a></button>
                <button><a href="./account.html"><img src="../assets/profile.png"/>Account</a></button>
                <button><a href="./bettinghistory.html"><img src="../assets/logoicon.png"/>History</a></button>
            </div>
            <button class="logout rounded">Logout</button>
        </div>
    </header>
        )
    }
}