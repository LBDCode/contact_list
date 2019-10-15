import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



class NewContact extends Component {

  
    render() {
      return (
        <>
          <div className="add-contact">
            <h1>Add a contact</h1>
            <Form className="add-form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formTelephone">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="tel" placeholder="Telephone" />
              </Form.Group>


              <Button variant="primary" type="submit">
                Add contact
              </Button>
            </Form>
          </div>  
        </>
      );
    }
  }
  
  export default NewContact;