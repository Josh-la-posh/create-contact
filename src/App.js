import React, { Component } from 'react'
import ListContacts from './ListContacts'


class App extends Component {
    state = {
        contacts: [
            {
                id: 'tyler',
                name: 'Tyler McGinnis',
                handle: '@tylermcginnis',
                avatarURL: 'https://localhost:5001/tyler.jpg'
            },
            {
                id: 'karen',
                name: 'Karen Isgrig',
                handle: '@karen_isgrigg',
                avatarURL: 'https://localhost:5001/karen.jpg'
            },
            {
                id: 'richard',
                name: 'Richard Kalehoff',
                handle: '@richardkalehoff',
                avatarURL: 'https://localhost:5001/richard.jpg'
            },
        ]   
    }

    deleteContact = (contact) => {
        // console.log('I am working');
        const contacts = this.state.contacts.filter(
            c=> {return c.id !== contact.id});
        this.setState({contacts});
    }
    
    render() {
        return(
            <div>
                <ListContacts
                    onDelete = {this.deleteContact}
                    contacts = {this.state.contacts} />
                    
            </div>
        )
    }
}

export default App