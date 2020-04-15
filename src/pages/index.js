import React from 'react';
import { render } from 'react-snapshot';
import './global.scss';
import Home from '../components/home/home';
import * as serviceWorker from '../serviceWorker';
import Header from '../components/header/header';
import SubHeader from '../components/subhead/subhead';
import Footer from '../components/footer/footer';
import FloatingBar from '../components/floatingbar/floatingbar';
import Chat from '../components/chat/chat';
import PinPad from '../components/pin/pin';
import SpinWheel from '../components/spinwheel/spinwheel';

render(
    <React.StrictMode>
      <div class="modalCover active"></div>
      <PinPad/>
      <SpinWheel/>
      <Header/>
      <SubHeader/>
      <section id="">
        <Home/>
      </section>
      <FloatingBar/>
      <Chat/>
      <Footer/>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();