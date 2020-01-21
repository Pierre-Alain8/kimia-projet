import React, { Component } from 'react';
import './evenement.css'




export default class Navevent extends Component {
    render() {
        return (
         
            <div className="month-list">
                <ul className="list-item">
                    <li className="month-item">janvier</li>
                    <li className="month-item">févier</li>
                    <li className="month-item">mars</li>
                    <li className="month-item">avril</li>
                    <li className="month-item">mai</li>
                    <li className="month-item">juin</li>
                    <li className="month-item">juillet</li>
                    <li className="month-item">aôut</li>
                    <li className="month-item">septembre</li>
                    <li className="month-item">octoble</li>
                    <li className="month-item">novembre</li>
                    <li className="month-item">décembre</li>
                </ul>
        </div>
           
        )
    }
}

