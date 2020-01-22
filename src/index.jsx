import './style.css'

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Input from './components/Input/Input.jsx'
import MessageList from './components/MessageList/MessageList.jsx';
import Button from './components/Button/Button.jsx'

class App extends Component {  

    submitForm=(event)=> {
        event.preventDefault()
    };

    render() {
        return(
            <div>
                <MessageList/>
                <div >
                    <form onSubmit={this.submitForm} className="wrapper-appPosts">
                        <Input type="text" placeholder="users name"/>
                        <Input type="text" placeholder="message"/>
                        {/* <Input type="submit"  buttonValue="send"/> */}
                        <Button type="submit" buttonValue="send"/>
                    </form>
                </div>
            </div>
        );
    } 
}
ReactDom.render(<App/>, document.querySelector('#root'));