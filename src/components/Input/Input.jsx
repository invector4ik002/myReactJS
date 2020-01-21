import React, { Component } from 'react';

import Button from '../Button/Button.jsx'

export default class Input extends Component {

    render() {
        return (
            <div className="wrapper-appPosts">
            
                <input type="text" placeholder="users name" id="users"></input>
                <input type="text" placeholder="message" id="message"></input>
                <Button/> 
                
            </div>
        );
    }
}

