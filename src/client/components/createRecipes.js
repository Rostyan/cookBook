import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class createRecipes extends Component {
  constructor() {
    super();

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: ''
    }
  };

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }

  // handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   this.setState({
  //     name: '',
  //     description: ''
  //   });
  // };

  // handleInputChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //     [e.target.description]: e.target.value,

  //   })
  // };

  onSubmit(e) {
    e.preventDefault()

    const recipesObject = {
      name: this.state.name,
      description: this.state.description,
    };

    axios.post('/api/create-recipes', recipesObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      description: '',
    });
  }

  

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Recipe">
          <Form.Label>Recipe</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" value={this.state.description} onChange={this.onChangeDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Recipe
        </Button>
      </Form>
    </div>);
  }
}
