import React, { Component } from "react";
import Card from 'react-bootstrap/Card';


class Contacts extends Component {

  
    render() {
      return (
        <>
            <h1>This is the Contact page!</h1>
            <div className="contact-info">
              <Card style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Email</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Phone Number</Card.Subtitle>
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