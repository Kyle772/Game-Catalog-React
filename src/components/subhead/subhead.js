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
    activateTab(event) {
        var button = document.querySelector('.profile.rounded');
        event.target.classList.toggle("clicked");
        document.querySelector("#" + button.getAttribute('target')).classList.toggle('active');
    }

    render() {
        return (
            <header className="secondary">
        <div className="container">
            <button className="row">
              <img src={Diamond} />
              <span>Video Slots</span>
          </button>
            <button className="row">
              <img src={Dice} />
              <span>Table Games</span>
          </button>
            <button className="row">
              <img src={Slots} />
              <span>Classic Slots</span>
          </button>
            <button className="row">
              <img src={Poker} />
              <span>Video Poker</span>
          </button>
            <button className="row">
              <img src={Scratch} />
              <span>Scratch Cards</span>
          </button>
            <button className="row mar">
              <img src={Jackpot} />
              <span>Jackpot Games</span>
          </button>
            <button className="balance rounded"><span className="text">Balance:</span> <span className="currency">$78.55</span><span className="refresh"></span></button>
            <button className="notification rounded"> </button>
            <button onClick={this.activateTab} className="profile rounded" target="account-dropdown">lawrence.do</button>
            <div id="account-dropdown">
                <button><a href="/favorites"><img src={Favorite}/>Favorites</a></button>
                <button><a href="/account"><img src={Profile}/>Account</a></button>
                <button><a href="/history"><img src={LogoIcon}/>History</a></button>
            </div>
            <button className="logout rounded">Logout</button>
        </div>
    </header>
        )
    }
}