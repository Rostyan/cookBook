import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import RecipesTable from './table';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount = () => {
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

  DataTable() {
    return this.state.recipes.map((res, i) => {
      return <RecipesTable obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date Of Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}