import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Contact from "./Components/Contact";
import New from "./Components/New";
import Edit from "./Components/Edit";
import NoMatch from "./Components/NoMatch";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        contacts: []
      };

  };

  // uuid generation using math.random
  generateID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  // get contact info from callback, generate and id, and add to this.state.contacts
  addContact = contact => {
    const oldContacts = [...this.state.contacts];
    let newContact = {...contact};

    newContact.id = this.generateID();

    oldContacts.push(newContact);

    this.setState({contacts: oldContacts});
  };
  
   // get contact info from callback, generate and id, and edit info in this.state.contacts
   editContact = contactInfo => {
    const editID = contactInfo.id;
    const newContacts = [...this.state.contacts];
    const contactIndex = newContacts.map(function(contact) { return contact.id; }).indexOf(editID);
    const newContactInfo = {...contactInfo}
    newContacts[contactIndex] = newContactInfo;
    this.setState({ contacts: newContacts});
  }; 

  // get id from cb, update state to remove contact
  deleteContact = id => {
    const oldContacts = [...this.state.contacts];
    const newContacts = oldContacts.filter( contact => contact.id !== id );
    this.setState({contacts: newContacts});
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/contacts"]} render={props =>
              <div className="contact-container">
                <h1>Contacts
                  <span>
                    <Button variant="primary" id="add-contact-btn" 
                      addContact={this.addContact}
                    >
                      <Link to={'/contacts/new'} id="add-contact-link"> Add Contact </Link>
                    </Button>
                  </span>
                </h1>
                {/* map through  contacts in state and generate list item for each
                  each li has a name w/ link, and edit button and a delete button
                */}
                <div className="contact-list">
                  {this.state.contacts.length > 0 ?
                    <ListGroup as="ul">
                      {this.state.contacts.map(contact => (
                          <ListGroup.Item as="li" key={contact.id}> 
                            <Link to={'/contact/' + contact.id}>
                              {contact.name}
                            </Link>
                            <span className="contact-actions">
                              <span>
                                <Link to={'/edit/' + contact.id}>edit </Link>
                              </span> 
                              <span onClick={() => this.deleteContact(contact.id)}>
                                delete
                              </span>
                            </span>
                          </ListGroup.Item> 
                      ))}
                    </ListGroup>
                    :
                    <h4>Add some contacts to get started</h4>
                }
                </div>
              </div>
              }
            />
            <Route exact path="/contacts/new" render={props =>
              <div>
                <New addContact={this.addContact}
                {...props}/>
              </div> } 
            />
            <Route exact path="/contact/:id" render={props =>
              <div>
                <Contact {...props} contacts={this.state.contacts}/>
              </div> } 
            />
            <Route exact path="/edit/:id" render={props =>
              <div>
                <Edit {...props} contacts={this.state.contacts} editContact={this.editContact}/>
              </div> } 
            />
            <Route render={props =>
              <NoMatch {...props}/>
            }
             />
          </Switch>
        </div>
      </Router>
    );
  
  }
}

export default App;
