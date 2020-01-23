import React, { Component } from 'react';

import Message from '../Message/Message.jsx'

export default class InputMessage extends Component {
constructor(props) {
        super(props);
        this.state = {
            // userName: '',
            messageContent: '',
        }
    };
    getValue =(event)=> {
        // console.log(event.target.value);
        this.setState({messageContent:event.target.value})
    };
    
    
    render() {
        const {type, placeholder} = this.props;
        return (               
            <div>   
                <Message message={this.state.messageContent}/> 
                <input 
                    onChange={this.getValue}                   
                    type={type} 
                    placeholder={placeholder}                
                >
                </input>              
            </div>
        );
    }
}

