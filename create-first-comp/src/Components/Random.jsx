import { useState } from "react";

const Random = () => {
  const [value, setValue] = useState(Math.random());

  const handleOnClick = () => {
    setValue(Math.floor(Math.random() * 100));
  };

  return (
    <>
      <h1>Random Number is :{value}</h1>
      <div style={{ margin: "15px" }}>
        <button onClick={handleOnClick}>Click Me To Chnage Value</button>
      </div>
    </>
  );
};

export default Random;
