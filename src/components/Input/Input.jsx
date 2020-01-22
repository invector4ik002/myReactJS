import React, { Component } from 'react';

export default class Input extends Component {

    getValue =(event)=> {
        console.log(event.target.value);
        this.setState({userName:event.target.value})
    };
    
    
    render() {
        const {type, placeholder} = this.props;
        return (
            <div>
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

