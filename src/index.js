import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './components/home/home';
import * as serviceWorker from './serviceWorker';

import Header from './components/header/header';
import SubHeader from './components/subhead/subhead';
import Footer from './components/footer/footer';
import FloatingBar from './components/floatingbar/floatingbar';
import Chat from './components/chat/chat'

ReactDOM.render(
    <React.StrictMode>
      <Header/>
      <SubHeader/>
      <section id>
        <Home/>
      </section>
      <Footer/>
      <FloatingBar/>
      <Chat/>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();