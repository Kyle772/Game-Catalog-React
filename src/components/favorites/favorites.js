import React from 'react';
import './favorites.scss';

function Favorites() {
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
    <section id="FavoritedGames">
        <div class="container">
            <h1>Favorited Games</h1>
            <div class="search-con left">
                <div class="search-bar">
                    <input class="search-inp" type="text" placeholder="Search for video slot games..." />
                </div>
            </div>
        </div>
        <div class="games container">
            <div class="gamecard">
                <div class="controls">
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <button class="fav active"></button>
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
                    <button class="fav active"></button>
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
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <button class="fav active"></button>
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
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
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
                    <div class="new">New!</div>
                    <button class="fav active"></button>
                </div>
                <div class="menu">
                    <p>Game Name</p>
                    <button class="blue">Play Game</button>
                </div>
                <img src="./assets/image.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-1.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-2.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-3.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-4.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-5.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-6.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-7.png" />
                <p>Game Name</p>
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
                <p>Game Name</p>
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
                <p>Game Name</p>
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
                <img src="./assets/image-10.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-11.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-12.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-13.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-14.png" />
                <p>Game Name</p>
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
                <p>Game Name</p>
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
                <img src="./assets/image-16.png" />
                <p>Game Name</p>
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
                <img src="./assets/image-17.png" />
                <p>Game Name</p>
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
                <img src="./assets/image.png" />
                <p>Game Name</p>
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
export default Favorites;