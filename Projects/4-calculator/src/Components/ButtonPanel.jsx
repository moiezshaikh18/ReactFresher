import Button from "./Button";

const ButtonPanel = ({ input, onClick }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "C",
    "+",
    "=",
  ];

  return (
    <div id="buttons-container">
      {buttons.map((btn) => (
        <Button
          key={btn}
          value={btn}
          onClick={onClick}
          disabled={btn === "=" && input === ""}
          className={btn === "=" ? "equal" : ""}
        />
      ))}
    </div>
  );
};

export default ButtonPanel;
