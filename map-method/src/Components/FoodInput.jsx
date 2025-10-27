import React, { useState } from "react";
import "./FoodInput.module.css"; // CSS file import

const FoodInput = ({ onAddFood }) => {
  const [food, setFood] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    buy: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddFood) {
      onAddFood(food);
    }
    setFood({
      id: "",
      name: "",
      category: "",
      price: "",
      description: "",
      image: "",
      buy: false,
    });
  };

  return (
    <form className="food-form" onSubmit={handleSubmit}>
      <h2>Add Food Item</h2>

      <div className="form-row">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={food.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={food.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={food.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={food.price}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="description"
        placeholder="Description"
        value={food.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={food.image}
        onChange={handleChange}
      />

      <button type="submit" className="submit-btn">
        Add Food
      </button>
    </form>
  );
};

export default FoodInput;
