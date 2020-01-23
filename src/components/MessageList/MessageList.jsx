import '../../style.css'

import React, { Component } from 'react';

import Form from '../Form/Form.jsx'
export default class MessageList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userName: '',
    //         messageContent: '',
    //     }
    // };
    
    render() {
        return (
            <div>
                <div className="messageList">
                    <Form/>
                </div>
            </div>
        );
    }
}

