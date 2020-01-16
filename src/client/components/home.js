import React, { Component } from 'react'
import axios from 'axios';

import UpdateRecipes from './updateRecipes'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    axios.get('/api/')
      .then(res => {
        this.setState({
          recipes: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const recipes = this.state.recipes
    return (
      <div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name of recipes</th>
              <th scope="col">Description</th>
              <th scope="col">Date of created</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              recipes.map((recipe, index) => {
              return (
                <UpdateRecipes 
                  key={index}
                  {...recipe}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}