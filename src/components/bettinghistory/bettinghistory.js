import React, { Component } from 'react';
import './jquery.dataTables.min.css';
import './bettinghistory.scss';
var $ = require('jquery');
$.DataTable = require('datatables.net');
class BettingHistory extends Component {
    componentDidMount() {
        $('#BettingHistoryTable').DataTable({
            "ordering": false
        });
    };
    render() {
        return (
            <React.Fragment>
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
                        <img class="jp-img" src="./assets/jackpot-text.png" />
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
                <section id="BettingHistory">
                    <div class="container title left">
                        <h4 class="blue">24 Bets</h4>
                        <h1>Betting History</h1>
                    </div>
                    <div class="container inputs modal row">
                        <label>From
                            <input type="date" />
                        </label>
                        <label>To
                            <input type="date"/>
                        </label>
                        <label>Game
                            <select>
                                <option>All Games</option>
                            </select>
                        </label>
                        <button class="cta square solid-blue">UPDATE</button>
                    </div>
                    <div class="container modal table">
                        <table id="BettingHistoryTable">
                            <thead>
                                <tr>
                                    <th>Date/Time</th>
                                    <th>Bet ID</th>
                                    <th>Game</th>
                                    <th>Selection</th>
                                    <th>Status</th>
                                    <th>Bet Amount</th>
                                    <th>Profit/Loss</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status green">WON</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                                <tr>
                                    <td>10/03/2020 20:53</td>
                                    <td class="id">5XOBI6RFIYS20YOX</td>
                                    <td>Pumpkin Smash</td>
                                    <td>(6) Devils Dyke</td>
                                    <td class="status red">LOST</td>
                                    <td>$25.50</td>
                                    <td>+$66.98</td>
                                </tr>
                            </tbody>
                        </table>
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
            </React.Fragment>
        )
    }
}

export default BettingHistory;