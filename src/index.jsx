import React, { Component } from 'react';
import ReactDom from 'react-dom';

import MessageList from './components/MessageList/MessageList.jsx';
import Form from './components/Form/Form.jsx'

class App extends Component {  

    render() {
        return(
            <div>
                <MessageList/> 
                <Form/>              
            </div>
        );
    } 
}
ReactDom.render(<App/>, document.querySelector('#root'));