import React, { Component } from 'react';
import logo from '../assets/logo.png';
import spade from '../assets/spade.png';
import live from '../assets/live.png';
import moon from '../assets/moon.png';
import USAFlag from '../assets/flags/usa.png';
import SpanFlag from '../assets/flags/mex-spanish.png';
import DropArrow from '../assets/round-dropdown-dark.png';
import Hamburger from '../assets/hamburger.svg';

export default class Header extends Component {
    render() {
        return (
            <header>
        <div class="container">
            <img class="logo" src={logo} />
            <button class="row"><a href="./homepage.html">
              <img src={spade} />
              <span>Casino</span></a>
          </button>
            <button class="row mar"><a href="./allgames.html">
              <img src={live} />
              <span>All Games</span></a>
          </button>
            <button class="row border modalActivate">
              <span>#2218</span>
          </button>
            <button class="round moon">
              <a href="../homepage-loggedin.html"><img src={moon} /></a>
          </button>
            <button class="profile large langselect" target="LangDropdown">
              <img class="selected" src={USAFlag} />
              <img class="arrow" src={DropArrow} />
          </button>
            <ul id="LangDropdown">
                <button class="lang-item">
                  <img src={USAFlag} /> 
                  <span>English (US)</span>
              </button>
                <button class="lang-item">
                  <img src={SpanFlag} /> 
                  <span>Spanish (MEX)</span>
              </button>
            </ul>
            <button class="mobileNav"><img src={Hamburger}/></button>
        </div>
    </header>
        )
    }
}