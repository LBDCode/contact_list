import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
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
      console.log(this.props.contacts);
      const { id } = this.props.match.params;
      const allContacts = [...this.state.contacts];
      const curContact = allContacts.filter( contact => contact.id === id );
      const currentContact = curContact[0];
      this.setState({ currentContact });
      console.log(this.state.contacts);
    };

  
    render() {
      return (
        <>
            <div className="contact-container">
              <h1>Contact Info</h1>
              {this.state.contacts.length > 0 ?
                <Card style={{ width: '20rem' }}>
                  <Card.Body>
                    <Card.Title>{this.state.currentContact.name ? this.state.currentContact.name : null}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.currentContact.email ? this.state.currentContact.email : null}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.currentContact.number ? this.state.currentContact.number : null}</Card.Subtitle>
                    {/* <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#">Delete</Card.Link> */}
                  </Card.Body>
                </Card>
                :
                <h5>something seems to have gone wrong</h5>
            
            }
              <Button variant="primary" id="back-home-button" 
              >
                <Link to={'/'} id="add-contact-link"> Back to Contacts </Link>
              </Button>

            </div>
              
        </>
      );
    }
  }
  
  export default Contacts;