const FoodItem = ({
  id,
  name,
  category,
  price,
  description,
  image,
  buy,
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
          src={image ? image : `https://picsum.photos/200/150?food=${id}`}
          alt={name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{name}</h3>
        <p style={{ fontStyle: "italic", color: "#555" }}>{category}</p>
        <p>{description}</p>
        <p style={{ fontWeight: "bold" }}>₹{price}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(id);
          }}
          style={{
            backgroundColor: buy ? "#4caf50" : "#008CBA",
            color: "#fff",
            padding: "8px 12px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {buy ? "Bought" : "Buy"}
        </button>
      </div>
    </>
  );
};

export default FoodItem;
