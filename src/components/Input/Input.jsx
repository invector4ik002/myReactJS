import React, { Component } from 'react';

// import Message from '../Message/Message.jsx'

export default class InputMessage extends Component {
// constructor(props) {
//         super(props);
//         this.state = {
//             messageContent: '',
//         }
//         this.getValue = this.getValue.bind(this)
//     };
    
    
    
    render() {
        const {type, placeholder, name, value} = this.props;
        return (               
            <div>   
                {/* <Message message={this.state.messageContent}/>  */}
                <input 
                     
                    name={name}                  
                    type={type} 
                    placeholder={placeholder} 
                    value={value}               
                >
                </input>              
            </div>
        );
    }
}

