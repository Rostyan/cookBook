import React, { Component } from 'react'

export default class createRecipes extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: ''
    }
  };


  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      name: '',
      description: ''
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.description]: e.target.value,

    })
  };

  

  render() {
    return (
        <form  onSubmit={this.props.handleFormSubmit} method="POST" action="api/createRecipes">
          <label htmlFor="name">
            Name of Recipes
					<br></br>
					<input required id="name" type="name" className="form-control"
					 value={this.props.name} type="text"
						name="name" onChange={this.props.handleInputChange} placeholder="Name of Recipes"
					   />
          </label>
					<br></br>
          <label htmlFor="description">
            Description
					<br></br>
            <textarea required id="description" type="description" className="form-control"
            value={this.props.description} type="text"
            name="description" onChange={this.props.handleInputChange} placeholder="Name of Recipes"
            />
          </label>
					<br></br>
          <button type="submit" className="btn btn-success btn-default" value="Submit">Add Recipes</button>
        </form>

    )
  }
}
