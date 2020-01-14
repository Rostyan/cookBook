import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


import Home from './components/home';
import CreateRecipes from './components/createRecipes'


class App extends Component {



  render() {

    
    return (
      <Router>
        <div className="App">

         

          <div className="container"></div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/createRecipes' component={CreateRecipes} />

            <Route render={() => (<div className="error404">
              <h1>Error 404</h1>
              <h2>Page not found!</h2>
            </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;