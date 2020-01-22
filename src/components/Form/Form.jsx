import '../../style.css'

import React, { Component } from 'react';

import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'

export default class Form extends Component {

    submitForm=(event)=> {
        event.preventDefault()
    };

    render() {
        return(
            <div >
                <form onSubmit={this.submitForm} className="wrapper-appPosts">
                    <Input type="text" placeholder="users name"/>
                    <Input type="text" placeholder="message"/>
                    <Button type="submit" buttonValue="send"/>
                </form>
            </div>
        );
    }   
}