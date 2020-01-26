import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";


import Home from './components/home';
import CreateRecipes from './components/createRecipes'
import UpdateRecipes from './components/updateRecipes'

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                Cook Book
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-recipes"} className="nav-link">
                  Create Recipes
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/update/:id"} className="nav-link">
                  Edit Recipes
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/recipes-list"} className="nav-link">
                  Recipes List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/create-recipes" component={CreateRecipes} />
                <Route path="/update/:id" component={UpdateRecipes} />
                <Route path="/recipes-list" component={Home} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;