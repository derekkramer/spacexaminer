import React, { Component } from 'react';
import '../App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <img src={"./img/banner.png"} />
                <div className="dropdown">
                    <button className="dropdown-button">Launches</button>
                    <div className="content">

                    </div>
                </div>
            </div>
        );
    }
}
