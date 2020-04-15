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
    activateModal() {
        var elModal1 = document.querySelector('.modalCover');
        var elModal2 = document.querySelector('#PinEntry');
        elModal1.classList.toggle('active');
        elModal2.classList.toggle('active');
    }

    activateTab(event) {
        var button = document.querySelector('.langselect');
        event.target.classList.toggle("clicked");
        document.querySelector("#" + button.getAttribute('target')).classList.toggle('active');
    }

    changeLang(event) {
        var imagesrc = event.target.firstElementChild.getAttribute("src");
        // var langtype = event.target.firstElementChild.getAttribute("lang");
        document.querySelector('.langselect .selected').setAttribute("src", imagesrc);
    }

    render() {
        return (
            <header>
                <div className="container">
                    <a className="logo" href="/"><img src={logo} /></a>
                    <button className="row"><a href="/">
                        <img src={spade} />
                        <span>Casino</span></a>
                    </button>
                    <button className="row mar"><a href="/allgames">
                        <img src={live} />
                        <span>All Games</span></a>
                    </button>
                    <button onClick={this.activateModal} className="row border modalActivate">
                    <span>#2218</span>
                </button>
                    <button className="round moon">
                    <a href="../homepage-loggedin.html"><img src={moon} /></a>
                </button>
                    <button onClick={this.activateTab} className="profile large langselect" target="LangDropdown">
                    <img className="selected" src={USAFlag} />
                    <img className="arrow" src={DropArrow} />
                </button>
                    <ul id="LangDropdown">
                        <button onClick={this.changeLang} className="lang-item">
                            <img src={USAFlag} /> 
                            <span>English (US)</span>
                        </button>
                        <button onClick={this.changeLang} className="lang-item">
                            <img src={SpanFlag} /> 
                            <span>Spanish (MEX)</span>
                        </button>
                    </ul>
                    <button className="mobileNav"><img src={Hamburger}/></button>
                </div>
            </header>
        )
    }
}