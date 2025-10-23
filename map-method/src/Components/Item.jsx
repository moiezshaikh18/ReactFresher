import { EmptyItem } from "./EmptyItem";
import { foodItems } from "../Data/foodItem";
import FoodItem from "./FoodItem";

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
      {foodItems.length ? (
        foodItems.map(({ id, name, category, price, description, image }) => {
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
        })
      ) : (
        <EmptyItem />
      )}
    </div>
  );
};

export default Item;
