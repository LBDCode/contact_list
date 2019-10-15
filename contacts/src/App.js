import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import New from "./Pages/New";
import NoMatch from "./Pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={props =>
              <div>
                <Main {...props}/>
              </div> }
            />
            <Route exact path="/contacts" render={props =>
              <div>
                <Main {...props}/>
              </div> }
            />
            <Route exact path="/contacts/new" render={props =>
              <div>
                <New {...props}/>
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
