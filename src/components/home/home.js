import React from 'react';
import './home.scss';

function Home() {
    return (<React.Fragment>
    <section class="hero">
        <div class="container">
            <h4 class="blue">NEW GAME</h4>
            <div class="hero-content row">
                <h2>Egyptian Runner</h2>
            </div>
            <button class="cta blue keep-text-white">Play Now</button>
        </div>
    </section>
    <section id="Jackpots" class="">
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
        <div class="container title">
            <h4 class="green uppercase">New Games</h4>
            <h2>The newest favorites from our players</h2>
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
                <img src="./assets/image-9.png" />
            </div>
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-7.png" />
            </div>
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-3.png" />
            </div>
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-4.png" />
            </div>
        </div>
        <div class="container all-games">
            <button id="AllGames" class="button">
                All Games
            </button>
        </div>
    </section>
    <section id="games">
        <div class="tab-controls container row gametypes">
            <button target="video-slots-tab" class="tab item col active col-6">
                <img src="./assets/diamond.png" />
                <h5>Video Slots</h5>
            </button>
            <button target="table-games-tab" class="tab item col col-6">
                <img src="./assets/dice.png" />
                <h5>Table Games</h5>
            </button>
            <button target="classic-slots-tab" class="tab item col col-6">
                <img src="./assets/slots.png" />
                <h5>Classic Slots</h5>
            </button>
            <button target="video-poker-tab" class="tab item col col-6">
                <img src="./assets/poker.png" />
                <h5>Video Poker</h5>
            </button>
            <button target="scratch-card-tab" class="tab item col col-6">
                <img src="./assets/scratch.png" />
                <h5>Scratch Cards</h5>
            </button>
            <button target="jackpot-games-tab" class="tab item col col-6">
                <img src="./assets/jackpot.png" />
                <h5>Jackpot Games</h5>
            </button>
        </div>
        <div class="search-con">
            <div class="search-bar">
                <input class="search-inp" type="text" placeholder="Search for video slot games..." />
            </div>
        </div>
        <div id="GamesTabsContainer" class="tabs-container">
            <div id="video-slots-tab" class="active">
                <div class="games">
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-7.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-8.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-9.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-10.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-11.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-12.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-13.png" />
                        <p>Game Name</p>
                    </div>
                </div>
            </div>
            <div id="table-games-tab">
                <div class="games">
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-1.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-2.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-3.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-4.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-5.png" />
                        <p>Game Name</p>
                    </div>
                </div>
            </div>
            <div id="classic-slots-tab">
                <div class="games">
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-13.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-14.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-15.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-16.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-17.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image.png" />
                        <p>Game Name</p>
                    </div>
                </div>
            </div>
            <div id="video-poker-tab">
                <div class="games">
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-5.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-6.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-7.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-8.png" />
                        <p>Game Name</p>
                    </div>
                </div>
            </div>
            <div id="scratch-card-tab">
                <div class="games">
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-11.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-12.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-13.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-14.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-15.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-16.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-17.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image.png" />
                        <p>Game Name</p>
                    </div>
                </div>
            </div>
            <div id="jackpot-games-tab">
                <div class="games">
                    <div class="gamecard">
                        <div class="controls">
                            <div class="new">New!</div>
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-1.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-2.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-3.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-4.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-5.png" />
                        <p>Game Name</p>
                    </div>
                    <div class="gamecard">
                        <div class="controls">
                            <button class="fav"></button>
                        </div>
                        <div class="menu">
                            <p>Game Name</p>
                            <button class="blue">Play Game</button>
                        </div>
                        <img src="./assets/image-6.png" />
                        <p>Game Name</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container load-more">
            <button id="load-more-games" class="button">
                Load More Games
            </button>
        </div>
    </section>

    <section class="winners">
        <div class="container">
            <div class="column">
                <h3>Recent Winners</h3>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <h3>Big Winners</h3>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <h3>Jackpot Winners</h3>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
                    </div>
                </div>
                <div class="playercard">
                    <img class="round player" src="./assets/game_icon-8.png" />
                    <div class="player-info">
                        <p><span class="blue">jazzn3</span> • <span class="game">Ents</span></p>
                        <p class="winnings">$33.21</p>
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
                    <button class="fav"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image-16.png" />
            </div>
            <div class="gamecard">
                <div class="controls">
                    <button class="fav"></button>
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
                    <button class="fav"></button>
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
                    <button class="fav"></button>
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
    </React.Fragment>);
}

export default Home;