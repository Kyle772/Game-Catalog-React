import React from 'react';
import './account.scss';

function Account() {
    return (<React.Fragment>
            <section id="Jackpots" class="just-jackpot">
                    <div class="container">
                        <div class="column col-3">
                            <div class="bar bigger">
                                <div class="text">
                                    <h3 class="uppercase">Grand</h3>
                                    <h3 class="currency">500</h3>
                                </div>
                            </div>
                            <div class="bar smaller">
                                <div class="text">
                                    <h3 class="uppercase">Minor</h3>
                                    <h3 class="currency">50</h3>
                                </div>
                            </div>
                        </div>
                        <div class="column red-gradient col-3">
                            <img class="jp-img" src="./assets/jackpot-text.png"/>
                        </div>
                        <div class="column col-3">
                            <div class="bar bigger">
                                <div class="text">
                                    <h3 class="uppercase">Major</h3>
                                    <h3 class="currency">250</h3>
                                </div>
                            </div>
                            <div class="bar smaller">
                                <div class="text">
                                    <h3 class="uppercase">Mini</h3>
                                    <h3 class="currency">20</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <button class="all-games button">
                            All Games
                        </button>
                    </div>
                </section>
            <section id="AccountSettings">
                <div class="container">
                    <h1>Account Settings</h1>
                    <div class="modal">
                        <div class="row">
                            <div class="column">
                                <h2>Account Information</h2>
                                <p>
                                    Edit your personal information that will be used accross our website.
                                </p>
                            </div>
                            <div class="column">
                                <label>Username
                                    <span class="at-username">@</span>
                                    <input class="at-username" value="username" placeholder="" type="text" disabled/>
                                </label>
                                <label>Name
                                    <input class="name" value="" placeholder="First Last" type="text"/>
                                </label>
                                <label>Email Address
                                    <input class="email" value="" placeholder="ecample@me.com" type="text"/>
                                    <button class="verify">Verify</button>
                                </label>
                                <label>Pin Code
                                    <input class="pin" value="" placeholder="••••" type="password"/>
                                    <button class="pin">Change Pin Code</button>
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <h2>Preferences</h2>
                                <p>
                                    Select your personal preferences regarding various aspects of the website.
                                </p>
                            </div>
                            <div class="column">
                                <label>Appearance
                                    <select class="themeselect" name="theme">
                                        <option value="Dark">Dark Theme</option>
                                        <option value="Light">Light Theme</option>
                                    </select>
                                </label>
                                <label>Time Zone
                                    <select class="timezone" name="tz">
                                        <option value="CET">Central European Time (CET)</option>
                                    </select>
                                </label>
                                <label>Date/time Format
                                    <select class="dtfmt" name="dtfmt">
                                        <option value="DD/MM/YYYY 00:00">DD/MM/YYYY 00:00</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="top-games">
        <div class="container title">
            <h4 class="red uppercase">Top Games</h4>
            <h2>Our players favorite games</h2>
        </div>
        <div class="container games">
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav active"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-16.png" />
            </div>
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav active"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-15.png" />
            </div>
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav active"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-9.png" />
            </div>
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav active"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-8.png" />
            </div>
        </div>
        <div class="container load-more">
            <button id="load-more-games" class="button">
                Load More Games
            </button>
        </div>
    </section>
        </React.Fragment>)
}

export default Account;