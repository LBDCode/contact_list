import React, { Component } from "react";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



class NewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: null,
        number: null,
        email: null
    }    
  };

  handleFormInputChange = event => {
    const{ name, value } = event.target;
    this.setState({
    [name]: value
    });
  };

  // execute the addContact callback and redirect back to main contact page
  handleSubmit = callback => {
    callback(this.formControl())
    this.props.history.push('/');
  }


  formControl = (name, number, email) => {

    // TODO: add some real form control here
    if (this.state.name && this.state.number && this.state.email) {
      const newContact = {...this.state};
      return newContact
    } else {
      console.log("missing some information");;
    }
  };

  // format the phone number
  formatNumber = (number) => {
    if (number) {
      let num = number.replace(/\D/g, '');
      if(num.length === 10) {
          let formated = num.match(/^(\d{3})(\d{3})(\d{4})$/);
          return '(' + formated[1] + ') ' + formated[2] + '-' + formated[3];
      } else {
          return num;
      } 
    }
  };

  
  render() {
    const props = this.props;
    const state = this.state;
    
    return (
      <div className="contact-container">
        <div className="add-contact">
          <h1>Add a contact</h1>
          <Form className="add-form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" 
                onChange={this.handleFormInputChange} 
                name="name" 
                value={state.name}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" 
                onChange={this.handleFormInputChange} 
                name="email" 
                value={state.email}
              />
            </Form.Group>

            <Form.Group controlId="formTelephone">
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="text" placeholder="Telephone" 
                onChange={this.handleFormInputChange} 
                name="number" 
                value={this.formatNumber(state.number)}
              
              />
            </Form.Group>

            <ButtonToolbar>
              <Button className="add-form-buttons" variant="primary" type="button"
                // onClick={()=> props.addContact(this.formControl()) }
                onClick={() => this.handleSubmit(props.addContact)}
              >
                Save contact
              </Button>
              <Button className="add-form-buttons" variant="secondary"
                onClick={ () => this.props.history.push('/') }
              >
                Cancel
              </Button>
            </ButtonToolbar>
          </Form>
        </div>  
      </div>
    );
    }
  }
  
  export default NewContact;