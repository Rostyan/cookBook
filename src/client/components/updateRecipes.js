import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class UpdateRecipes extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      datecreated: ''
    };
    
  }

  // componentDidMount() {
  //   axios.get('/api/update/' + this.props.match.params.id)
  //     .then(res => {
  //       this.setState({
  //         name: res.data.name,
  //         description: res.data.description,
  //         datecreated: res.data.datecreated
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const updateObject = {
      name: this.state.name,
      description: this.state.description,
    };

      axios.put('/api/update/' + this.props.match.params.id, updateObject)
      .then((res) => {
        console.log(res.data)
        console.log('Recipes successfully updated')
      }).catch((error) => {
        console.log(error)
      })

      // Redirect to Recipes List 
      this.props.history.push('/recipes-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Recipes</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Recipe
        </Button>
      </Form>
    </div>);
  }
}
