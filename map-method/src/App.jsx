import Item from "./Components/Item";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const addFood = (food) => {
    console.log(food);

    setFoodItems((prev) => [...prev, food]);
  };

  const handleOnBuy = (id) => {
    setFoodItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, buy: !item.buy } : item))
    );
  };

  console.log("food", foodItems);

  return (
    <>
      <FoodInput onAddFood={addFood} />
      <Item foodItems={foodItems} handleOnBuy={handleOnBuy} />
    </>
  );
}

export default App;
