import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class NoMatch extends Component {

  
    render() {
      return (
        <>
          <h5>Let's get you back on track</h5>
            <Button variant="primary" id="back-home-button" 
            >
              <Link to={'/'} id="add-contact-link"> Back to Contacts </Link>
            </Button>
        </>
      );
    }
  }
  
  export default NoMatch;