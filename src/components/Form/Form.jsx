import '../../style.css'

import React, { Component } from 'react';

import InputMessage from '../InputMessage/InputMessage.jsx'
import Button from '../Button/Button.jsx'

export default class Form extends Component {

    submitForm=(event)=> {
        event.preventDefault()
    };

    
    render() {
        return(
            <div >
                <form onSubmit={this.submitForm} className="wrapper-appPosts">
                    {/* <Input type="text" placeholder="users name"/> */}
                    <InputMessage type="text" placeholder="message"/>
                    <Button type="submit" buttonValue="send"/>
                </form>
            </div>
        );
    }   
}