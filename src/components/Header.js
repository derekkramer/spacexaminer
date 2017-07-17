import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Header extends Component{
    toggleMenu(){
        $('.content').toggleClass('show');
    }

    hideMenu(){
        $('.content').removeClass('show');
    }

    render(){
        return(
            <div className="header">
                <img src={"./img/banner.png"} alt="" />
                <div className="dropdown" onBlur={this.hideMenu}>
                    <button className="dropdown-button" onClick={this.toggleMenu}>Launches</button>
                    <div className="content">
                        <button className="content-button">Launch</button>
                        <button className="content-button">Launch</button>
                        <button className="content-button">Launch</button>
                        <button className="content-button">Launch</button>
                    </div>
                </div>
            </div>
        );
    }
}
