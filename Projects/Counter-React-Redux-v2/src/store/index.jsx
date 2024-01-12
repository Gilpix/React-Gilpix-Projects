import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type == "INCREMENT") newStore = { counter: store.counter + 1 };
  else if (action.type == "DECREMENT")
    newStore = { ...newStore, counter: store.counter - 1 };
  else if (action.type == "ADD_INPUT")
    newStore = {
      ...newStore,
      counter: store.counter + parseInt(action.payload.value),
    };
  else if (action.type == "SUBTRACT_INPUT")
    newStore = {
      ...newStore,
      counter: store.counter - parseInt(action.payload.value),
    };
  else if (action.type == "PRIVACY_TOGGLE")
    newStore = { ...newStore, privacy: !store.privacy };
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
