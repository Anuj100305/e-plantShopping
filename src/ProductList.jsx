import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 200, category: "Indoor" },
  { id: 2, name: "Peace Lily", price: 250, category: "Indoor" },
  { id: 3, name: "Rose", price: 150, category: "Outdoor" },
  { id: 4, name: "Tulip", price: 180, category: "Outdoor" },
  { id: 5, name: "Aloe Vera", price: 120, category: "Succulent" },
  { id: 6, name: "Cactus", price: 100, category: "Succulent" }
];

function ProductList() {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState({});

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setDisabled({ ...disabled, [plant.id]: true });
  };

  return (
    <div className="products">
      {["Indoor", "Outdoor", "Succulent"].map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>
          {plants
            .filter((p) => p.category === cat)
            .map((plant) => (
              <div key={plant.id} className="product-card">
                <h3>{plant.name}</h3>
                <p>₹{plant.price}</p>
                <button
                  disabled={disabled[plant.id]}
                  onClick={() => handleAdd(plant)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
