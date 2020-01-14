import React, { useState, useEffect } from 'react'

import listsService from './service';

export default function Home() {
  const [recipes, setproducts] = useState(null);

  useEffect(() => {
    if (!recipes) {
      getList();
    }
  })


  const getList = async () => {
    let res = await listsService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderData = recipes => {
    return (
      <tr>
        <th scope="col">{recipes.name}</th>
        <th scope="col">{recipes.description}</th>
        <th scope="col">{recipes.datecreated}</th>
        <th> </th>
      </tr>


      // <li key={recipes._id} className="list__item product">
      //   <h3 className="product__name">{recipes.name}</h3>
      //   <p className="product__description">{recipes.description}</p>
      //   <p className="product__description">{recipes.datecreated}</p>

      // </li>
    );
  };

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
          {(recipes && recipes.length > 0) ? (
            recipes.map(recipe => renderData(recipe))
          ) : (
              <p>No recipes found</p>
            )}
        </tbody>
      </table>
    </div>
  )
}