import '../../style.css'

import React, { Component } from 'react';

// import Input from '../Input/Input.jsx'

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            messageContent: '',
        }
    };
    
    render() {
        return (
            <div>
                <div className="messageList">
                    <p>{this.state.userName}</p>
                    <p>work</p>
                </div>
            </div>
        );
    }
}

