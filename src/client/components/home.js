import React, { useState, useEffect } from 'react'

import listsService from './service';

export default function Home() {
  const [recipes, setproducts] = useState(null);

  useEffect(() => {
    if(!recipes) {
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
      <li key={recipes._id} className="list__item product">
        <h3 className="product__name">{recipes.name}</h3>
        <p className="product__description">{recipes.description}</p>
      </li>
    );
  };

    return (
      <div>

        <ul className="list">
          {(recipes && recipes.length > 0) ? (
            recipes.map(recipe => renderData(recipe))
          ) : (
              <p>No recipes found</p>
            )}
        </ul>
      </div>
    )
  }