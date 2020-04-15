import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
// Pages
import HomePage from "./pages/home.jsx";
import AllGamesPage from "./pages/allgames.jsx";
import AccountPage from "./pages/account.jsx";
import BettingHistoryPage from "./pages/bettinghistory.jsx";
import FavoritePage from "./pages/favorites.jsx";
import NotFound from "./pages/404";

class App extends Component {
    render() {
        return (<Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/all" component={AllGamesPage}/>
            <Route exact path="/account" component={AccountPage}/>
            <Route exact path="/favorites" component={FavoritePage}/>
            <Route exact path="/history" component={BettingHistoryPage}/>
            <Route exact path="/404" component={NotFound}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>)
    }
}

export default App;