import React, { Component } from 'react';
import $ from 'jquery';
import * as THREE from 'three';
import '../App.css';

export default class Viewer extends Component{
    constructor(props){
        super(props);

        const scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    }

    // componentDidMount(){
    //     const viewer = document.getElementById('viewer');
    //     renderer.setSize($(viewer).width(), $(viewer).height());
    //     viewer.appendChild(renderer.domElement);
    // }

    render(){
        return(
            <div className="viewer" id="viewer">
                {/* <h1>Viewer</h1> */}
            </div>
        );
    }
}
