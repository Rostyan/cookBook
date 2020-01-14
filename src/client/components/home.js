import React, { useState, useEffect } from 'react'

import productService from './service';

export default function Home() {
  const [lists, setLists] = useState(null);

  useEffect(() => {
    if(!lists) {
      getList();
    }
  })
 

  const getList = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderData = lists => {
    return (
      <li key={lists._id} className="list__item product">
        <h3 className="product__name">{lists.name}</h3>
        <p className="product__description">{lists.description}</p>
      </li>
    );
  };

    console.log('list', lists)
    return (
      <div>

        <ul className="list">
          {(lists && lists.length > 0) ? (
            lists.map(list => renderData(list))
          ) : (
              <p>No products found</p>
            )}
        </ul>
      </div>
    )
  }

