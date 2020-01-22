import React, { Component } from 'react';

export default class Input extends Component {

    getValue =(event)=> {
        console.log(event.target.value);
    };
    
    
    render() {
        const {type, placeholder, buttonValue} = this.props;
        return (
            <div>
                <input 
                    onChange={this.getValue}                   
                    type={type} 
                    placeholder={placeholder}
                    // value={buttonValue} 
                    // onClick={this.sendMess}                
                >
                </input> 
            </div>    
        );
    }
}

