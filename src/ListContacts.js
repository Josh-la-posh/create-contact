import React, { Component } from 'react'
import './App.css'
class ListContacts extends Component {
    state= {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(()=>({query: query.trim()}))
    }

    render() {
        const {contacts, onDelete} = this.props
        const {query} = this.state

        const showingContacts = query === ''
            ? contacts 
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input 
                        type="text" 
                        className="search-contacts"
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event)=> this.updateQuery(event.target.value)}
                         />
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={()=>this.updateQuery('')} className="reset-contact">Show all</button>
                    </div>
                )}
    
                <ol className = 'contact-list'>
                {showingContacts.map((contact) => (
                    <li key={contact.id}
                        className='contact-list-item'>
                        <div 
                            className= 'contact-avatar'
                            style= {{backgroundIimage: `url(${contact.avatarURL})`}}>
                        </div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button onClick = {() => 
                            onDelete(contact)} >
                                Delete</button>
                    </li>
                ))}
            </ol>
            </div>
        )
    }
}

export default ListContacts