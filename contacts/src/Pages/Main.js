import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class Main extends Component {

  
    render() {
      return (
        <>
            <h1>Contacts<span><Button variant="primary" id="add-contact-btn">Add Contact</Button></span></h1>
            <div className="contact-list">
              <ListGroup as="ul">
                <ListGroup.Item as="li"> 
                  Cras justo odio 
                  <span className="contact-actions"><span>edit</span> <span>delete</span></span>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <span className="contact-actions"><span>edit</span> <span>delete</span></span>
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <span className="contact-actions"><span>edit</span> <span>delete</span></span>
                  Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <span className="contact-actions"><span>edit</span> <span>delete</span></span>
                  Porta ac consectetur ac
                </ListGroup.Item>
              </ListGroup>
            </div>

        </>
      );
    }
  }
  
  export default Main;
  