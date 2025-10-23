import { EmptyItem } from "./EmptyItem";
import { foodItems } from "../Data/foodItem";
import FoodItem from "./FoodItem";

const Item = () => {
  if (foodItems.length === 0) {
    return <EmptyItem />;
  }

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
          <FoodItem
            id={id}
            name={name}
            category={category}
            price={price}
            description={description}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Item;
