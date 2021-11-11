import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { getAllContacts } from '../services/ContactService';
import { Contacts } from './Contacts';

class DisplayContacts extends Component {
    

    state = {
        contacts: []
      }

     getAllContacts = () => {
        getAllContacts()
          .then(contacts => {
            console.log(contacts)
            this.setState({contacts: contacts})
          });
      }

      componentDidMount() {
        this.getAllContacts();
      }

      render() {
        const status = this.state.contacts.length === 0 ? <h1>There are no registered contacts</h1> : <Contacts contacts={this.state.contacts}></Contacts>;
        return(
            <div className="container pt-3">
                <Button variant="outline-primary" href="/">Home</Button>
                {status}
            </div>
            
        )
      }
    
}

export default DisplayContacts;