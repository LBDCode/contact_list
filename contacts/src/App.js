import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import New from "./Pages/New";
import NoMatch from "./Pages/NoMatch";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        contacts: [
            {
            id: 1,
            name: "Libby Duggan",
            number: "9197571427",
            email: "libby@gmail.com"
          },
          {
            id: 2,
            name: "John Smith",
            number: "9192225555",
            email: "John@gmail.com"
          }
        ]
      };

  };

  generateID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  addContact = contact => {
    const oldContacts = [...this.state.contacts];
    let newContact = {...contact};

    newContact.id = this.generateID();
    oldContacts.push(newContact);

    this.setState({contacts: oldContacts});
  };

  deleteContact = id => {
    const oldContacts = [...this.state.contacts];
    const newContacts = oldContacts.filter( contact => contact.id !== id );
    this.setState({contacts: newContacts});
  }

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
                      <Link to={'/contacts/new'} > Add Contact </Link>
                    </Button>
                  </span>
                </h1>
                <div className="contact-list">
                  <ListGroup as="ul">
                    {this.state.contacts.map(contact => (
                        <ListGroup.Item as="li" key={contact.id}> 
                          <Link to={'/contact/' + contact.id}>
                            {contact.name}
                          </Link>
                          <span className="contact-actions"><span>edit</span> <span onClick={() => this.deleteContact(contact.id)}>delete</span></span>
                        </ListGroup.Item>
                    ))}
                  </ListGroup>
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
