import React, { Component } from 'react';
import BackButton from '../assets/arrow-left.png';
import Help from '../assets/questionmark.png';
import Delete from '../assets/delete.png';


export default class PinPad extends Component {
    deactivateModal() {
        var elModal1 = document.querySelector('.modalCover');
        var elModal2 = document.querySelector('#PinEntry');
        elModal1.classList.remove('active');
        elModal2.classList.remove('active');
    }

    render() {
        return (
            <div id="PinEntry" className="shadow modal active">
                <div className="top">
                    <button onClick={this.deactivateModal} className="back"><img src={BackButton} /></button>
                    <h3>Enter Pin</h3>
                    <button className="help"><img src={Help} /></button>
                </div>
                <div className="digits" code-entry="">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="keypad">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="deactivate"></button>
                    <button>0</button>
                    <button className="del"><img src={Delete} /></button>
                </div>
            </div>
        )
    }
}