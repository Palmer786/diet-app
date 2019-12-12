import React, { useEffect, useState } from "react";
import DelProduct from "./DelProduct";
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";

const MealDetails = ({ match }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(`${match.params.title}`)) || {
      key: `${match.params.title}`,
      food: []
    }
  );
  useEffect(() => {
    localStorage.setItem(`${match.params.title}`, JSON.stringify(items));
  }, [items]);
  return (
    <div className="main">
      <h1>{items.key}</h1>
      <SearchProduct title={match.params.title} />
      <div className="myList">
        {items.food.map(item => (
          <div className="product" key={item.id}>
            <div className="product-name">
              <h3>{item.name}</h3>
            </div>
            <div className="product-details">
              <p>Calories: {item.calories}</p>
              <p>Proteins: {item.proteins}</p>
              <p>Fats: {item.fats}</p>
              <p>Carbohydrates: {item.carbohydrates}</p>
            </div>
            <div className="product-delete">
              <DelProduct
                id={item.id}
                setItems={setItems}
                title={match.params.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealDetails;
