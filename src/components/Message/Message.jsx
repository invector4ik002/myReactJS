import React, { Component } from 'react';

export default class Message extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // userName: '',
    //         messageContent: '',
    //     }
    // };
    render() {
        return(
            <span>{this.props.message}</span>
        )
    }
} 