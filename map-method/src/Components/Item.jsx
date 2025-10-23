import { EmptyItem } from "./EmptyItem";
import { foodItems } from "../Data/foodItem";
import FoodItem from "./FoodItem";
import styles from "./item.module.css";

const Item = () => {
  return (
    <div className={styles["item-container"]}>
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
