import React from "react";
const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    description: "Classic cheese and tomato pizza",
    image: "https://picsum.photos/200/150?food=1",
  },
  {
    id: 2,
    name: "Veg Burger",
    category: "Burger",
    price: 149,
    description: "Delicious veggie burger with lettuce and tomato",
    image: "https://picsum.photos/200/150?food=2",
  },
  {
    id: 3,
    name: "French Fries",
    category: "Snacks",
    price: 99,
    description: "Crispy golden fries",
    image: "https://picsum.photos/200/150?food=3",
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "Salad",
    price: 199,
    description: "Fresh romaine lettuce with Caesar dressing",
    image: "https://picsum.photos/200/150?food=4",
  },
  {
    id: 5,
    name: "Chocolate Shake",
    category: "Beverages",
    price: 129,
    description: "Rich and creamy chocolate milkshake",
    image: "https://picsum.photos/200/150?food=5",
  },
];

const Item = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {foodItems.map(({ id, name, category, price, description, image }) => {
        return (
          <div
            key={id}
            style={{
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={image}
              alt={name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{name}</h3>
            <p style={{ fontStyle: "italic", color: "#555" }}>{category}</p>
            <p>{description}</p>
            <p style={{ fontWeight: "bold" }}>₹{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
