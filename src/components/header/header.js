import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
        <div class="container">
            <img class="logo" src="./assets/logo.png" />
            <button class="row"><a href="./homepage.html">
              <img src="./assets/spade.png" />
              <span>Casino</span></a>
          </button>
            <button class="row mar"><a href="./allgames.html">
              <img src="./assets/live.png" />
              <span>All Games</span></a>
          </button>
            <button class="row border modalActivate">
              <span>#2218</span>
          </button>
            <button class="round moon">
              <a href="../homepage-loggedin.html"><img src="./assets/moon.png" /></a>
          </button>
            <button class="profile large langselect" target="LangDropdown">
              <img class="selected" src="./assets/flags/usa.png" />
              <img class="arrow" src="./assets/round-dropdown-dark.png" />
          </button>
            <ul id="LangDropdown">
                <button class="lang-item">
                  <img src="./assets/flags/usa.png" /> 
                  <span>English (US)</span>
              </button>
                <button class="lang-item">
                  <img src="./assets/flags/mex-spanish.png" /> 
                  <span>Spanish (MEX)</span>
              </button>
            </ul>
            <button class="mobileNav"><img src="./assets/hamburger.svg"/></button>
        </div>
    </header>
        )
    }
}