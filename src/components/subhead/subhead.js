import React, { Component } from 'react'
import Diamond from '../assets/diamond.png';
import Dice from '../assets/dice.png';
import Slots from '../assets/slots.png';
import Poker from '../assets/poker.png';
import Scratch from '../assets/scratch.png';
import Jackpot from '../assets/jackpot.png';
import Favorite from '../assets/favorite.svg';
import Profile from '../assets/profile.png';
import LogoIcon from '../assets/logoicon.png';

export default class SubHeader extends Component {
    render() {
        return (
            <header class="secondary">
        <div class="container">
            <button class="row">
              <img src={Diamond} />
              <span>Video Slots</span>
          </button>
            <button class="row">
              <img src={Dice} />
              <span>Table Games</span>
          </button>
            <button class="row">
              <img src={Slots} />
              <span>Classic Slots</span>
          </button>
            <button class="row">
              <img src={Poker} />
              <span>Video Poker</span>
          </button>
            <button class="row">
              <img src={Scratch} />
              <span>Scratch Cards</span>
          </button>
            <button class="row mar">
              <img src={Jackpot} />
              <span>Jackpot Games</span>
          </button>
            <button class="balance rounded"><span class="text">Balance:</span> <span class="currency">$78.55</span><span class="refresh"></span></button>
            <button class="notification rounded"> </button>
            <button class="profile rounded" target="account-dropdown">lawrence.do</button>
            <div id="account-dropdown">
                <button><a href="./favorited.html"><img src={Favorite}/>Favorites</a></button>
                <button><a href="./account.html"><img src={Profile}/>Account</a></button>
                <button><a href="./bettinghistory.html"><img src={LogoIcon}/>History</a></button>
            </div>
            <button class="logout rounded">Logout</button>
        </div>
    </header>
        )
    }
}