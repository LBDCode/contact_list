import React, { Component } from "react";
import Card from 'react-bootstrap/Card';


class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts,
      currentContact: {}
    }
  }  

    componentDidMount () {
      const { id } = this.props.match.params;
      const allContacts = [...this.state.contacts];
      const curContact = allContacts.filter( contact => contact.id === parseInt(id) );
      const currentContact = curContact[0];
      this.setState({ currentContact });
      console.log(this.state.currentContact);
    };

  
    render() {
      return (
        <>
            <h1>This is the Contact page!</h1>
            <div className="contact-container">
              <Card style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>{this.state.currentContact.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{this.state.currentContact.email}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{this.state.currentContact.number}</Card.Subtitle>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
            </div>
              
        </>
      );
    }
  }
  
  export default Contacts;