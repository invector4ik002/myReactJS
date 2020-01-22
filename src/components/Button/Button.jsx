import React, { Component } from 'react';

export default class Button extends Component {
    
    sendMess =()=> {
        console.log('work');
    };

    render() {
        return (
            <div>
                <input 
                type={this.props.type} 
                onClick={this.sendMess}
                value={this.props.buttonValue}
                >
                </input>
            </div>
        );
    }
}