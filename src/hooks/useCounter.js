import { useState } from "react";
import shortid from "shortid";
import { counters } from "../constants";

const useCounter = () => {
  const [state, setState] = useState([...counters]);
  const [additionalState, setAdditionalState] = useState([...counters]);

  const increment = (id) => {
    const findItem = additionalState.find((item) => item.id === id);
    const incrementValue = findItem.count;
    const updatedState = state.map((item) => {
      if (item.id === id) {
        if (item.id === state[0].id) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return {
            ...item,
            count: item.count + incrementValue,
          };
        }
      }
      return { ...item };
    });
    setState(updatedState);
  };

  const decrement = (id) => {
    const findItem = additionalState.find((item) => item.id === id);
    const decrementValue = findItem.count;
    const updatedState = state.map((item) => {
      if (item.id === id && item.count > 0) {
        if (item.id === state[0].id) {
          return {
            ...item,
            count: item.count - 1,
          };
        } else {
          return {
            ...item,
            count: item.count - decrementValue,
          };
        }
      }
      return { ...item };
    });
    setState(updatedState);
  };

  const addCounter = () => {
    const newCounter = {
      id: shortid.generate(),
      count: Math.floor(Math.random() * 10) + 1,
    };
    setAdditionalState([...additionalState, newCounter]);
    setState([...state, newCounter]);
  };

  const handleReset = () => {
    setState(additionalState);
  };

  const totalCount = () => {
    const total = state.reduce((acc, cur) => {
      acc += cur.count;
      return acc;
    }, 0);
    return total;
  };

  return {
    state, 
    additionalState,
    increment,
    decrement,
    addCounter,
    handleReset,
    totalCount
  };
};


export default useCounter;