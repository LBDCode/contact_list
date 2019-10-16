import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

  addContact = (contact) => {
    const oldContacts = [...this.state.contacts];
    let newContact = {...contact};

    newContact.id = this.generateID();
    oldContacts.push(newContact);

    this.setState({contacts: oldContacts});
    console.log(this.state.contacts);
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={props =>
              <div>
                <Main contacts={this.state.contacts}
                {...props}
                />
              </div> }
            />
            <Route exact path="/contacts" render={props =>
              <div>
                <Main 
                contacts={this.state.contacts}
                {...props}/>
              </div> }
            />
            <Route exact path="/contacts/new" render={props =>
              <div>
                <New addContact={this.addContact}
                {...props}/>
              </div> } 
            />
            <Route exact path="/contact/:id" render={props =>
              <div>
                <Contact {...props}/>
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
