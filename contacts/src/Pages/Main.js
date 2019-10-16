import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
        contacts: props.contacts,
    }    
  };

  render() {
    return (
      <div className="contact-container">
          <h1>Contacts
            <span>
              <Button variant="primary" id="add-contact-btn" 
                onClick={ () => this.props.history.push('/contacts/new') }
                addContact={this.addContact}
              >Add Contact
              </Button>
            </span>
          </h1>
          <div className="contact-list">
            <ListGroup as="ul">
              {this.state.contacts.map(contact => (
                <ListGroup.Item as="li" key={contact.id}> 
                  {contact.name}
                  <span className="contact-actions"><span>edit</span> <span onClick={() => this.props.delContact(contact.id)}>delete</span></span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      );
    }
  }
  
  export default Main;
  