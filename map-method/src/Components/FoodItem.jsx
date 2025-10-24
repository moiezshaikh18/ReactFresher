const FoodItem = ({
  id,
  name,
  category,
  price,
  description,
  image,
  onClick,
}) => {
  return (
    <>
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
        onClick={() => onClick(id, name)}
      >
        <img
          src={image ? image : `https://picsum.photos/200/150?food=${id}}`}
          alt={name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{name}</h3>
        <p style={{ fontStyle: "italic", color: "#555" }}>{category}</p>
        <p>{description}</p>
        <p style={{ fontWeight: "bold" }}>₹{price}</p>
      </div>
    </>
  );
};

export default FoodItem;
