import { EmptyItem } from "./EmptyItem";
import FoodItem from "./FoodItem";
import { Container } from "./Container";

const Item = ({ foodItems, handleOnBuy }) => {
  return (
    <Container key={`${foodItems}-rarr`}>
      {foodItems.length ? (
        foodItems.map(
          ({ id, name, category, price, description, image, buy }) => {
            return (
              <FoodItem
                id={id}
                name={name}
                category={category}
                price={price}
                description={description}
                image={image}
                buy={buy}
                onClick={handleOnBuy}
              />
            );
          }
        )
      ) : (
        <EmptyItem />
      )}
    </Container>
  );
};

export default Item;
