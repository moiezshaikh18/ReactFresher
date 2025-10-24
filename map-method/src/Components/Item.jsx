import { EmptyItem } from "./EmptyItem";
import FoodItem from "./FoodItem";
import { Container } from "./Container";

const Item = ({ foodItems }) => {
  const handleOnClick = (id, val) => {
    console.log(id, val);
  };

  return (
    <Container>
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
              onClick={handleOnClick}
            />
          );
        })
      ) : (
        <EmptyItem />
      )}
    </Container>
  );
};

export default Item;
