import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class RecipesTable extends Component {

  constructor(props) {
    super(props);
    this.deleteRecipes = this.deleteRecipes.bind(this);
  }

  deleteRecipes = () => {
    axios.delete('/api/delete/' + this.props.obj._id)
      .then((res) => {
        console.log('Recipes successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.datecreated}</td>
        <td>
          
          <Button id='update' size="sm" variant="primary">
            <Link className="edit-link" to={"/update/" + this.props.obj._id} />
            Edit
          </Button>

          <Button onClick={this.deleteRecipes} size="sm" variant="danger">Delete</Button>
        </td>
      </tr>
    );
  }
}