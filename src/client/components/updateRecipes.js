import React, { Component } from 'react';
import   {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios';

export default class UpdateRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      datecreated: ''
    };
    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  deleteRecipe() {
    axios.delete('/api/delete/' + this.props._id)
      .then((res) => {
        console.log('Student successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }


  onEdit() {
    if (this.state.isEdit) {
      this.setState({ isEdit: false });
    } else {
      this.setState({ isEdit: true });
    }

  }

  onSubmit(e) {
    e.preventDefault()
    

    this.setState({ isEdit: false });

    const recipeObject = {
      name: this.state.name,
      description: this.state.description,
      datecreated: this.state.datecreated
    };

    axios.put('/api/update/' + this.props.id, recipeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Recipe successfully updated')
      }).catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { name, description, datecreated } = this.props;

    return (
      <Router>
        {
          this.state.isEdit
            ? (
              <tr>
                <td>
                  <form action='/api/patch?_method=PATCH' method='POST' onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <span>Name</span>
                      <input placeholder="Name" name="name" className="form-control" ref={name => this.name = name} defaultValue={name} required />
                      <span>Description</span>
                      <textarea placeholder="description" name="description" className="form-control" ref={description => this.description = description} defaultValue={description} required />
                      <span>Data of created</span>
                      <input type="datecreated" name="datecreated" placeholder="datecreated Email" className="form-control" ref={datecreated => this.datecreated = datecreated} defaultValue={datecreated} required />
                      <br></br>
                      <input type="submit"
                        className="btn btn-block btn-primary " value="Save" />
                    </div>
                  </form>
                  <button className="btn btn-block btn-danger" onClick={this.onEdit}>Cancel</button>
                </td>
              </tr>
            )
            : (
              <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{datecreated}</td>
                <td><button type="button" className="btn btn-primary" onClick={this.onEdit}>Edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={this.deleteRecipe}>Delete</button></td>
              </tr>
            )
        }
      </Router>
    )
  }
}
