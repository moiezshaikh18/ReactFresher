import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.payload };

    case "DEC":
      return { ...state, counter: state.counter - action.payload };
  }

  return state;
};

export const CounterStore = createStore(reducer);

const subscriber = () => {
  return CounterStore.getState();
};

CounterStore.subscribe(subscriber);
