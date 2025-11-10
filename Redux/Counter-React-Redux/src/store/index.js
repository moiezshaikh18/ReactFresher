import { createStore } from "redux";

const initialState = {
  counter: 0,
  privacy: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.payload };

    case "DEC":
      return { ...state, counter: state.counter - action.payload };

    case "ADD":
      return { ...state, counter: state.counter + action.payload };

    case "SUB":
      return { ...state, counter: state.counter - action.payload };

    case "PRIVACY":
      return { ...state, privacy: !state.privacy };
  }

  return state;
};

export const CounterStore = createStore(reducer);

const subscriber = () => {
  return CounterStore.getState();
};

CounterStore.subscribe(subscriber);
