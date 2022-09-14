import React, { useState } from "react";
import Stats from "./components/Stats";
import Counter from "./components/Counter";
import {allCounter} from './constants';

const App = () => {
  const [state, setState] = useState([...allCounter]);
  const increment = (id) => {
    const copyState = [...state];
    const updateItem = copyState.find(counter => counter.id === id);
    updateItem.count += 1
    return setState([...state])
  }
  const decrement = (id) => {
    const copyState = [...state];
    const updateItem = copyState.find(counter => counter.id === id);
    if(updateItem.count > 0) {
      updateItem.count -= 1
    }
    return setState([...state])
  }
  const totalCount = () => {
    const total = state.reduce((acc, cur) => {
      acc += cur.count;
      return acc;
    }, 0)
    return total;
  }

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {
          state.map((counter) => (
            <div key={counter.id}>
              <Counter count={counter} increment={increment} decrement={decrement}/>
            </div>
          ))
        }
        <Stats count={totalCount()} />
      </div>
    </div>
  );
};

export default App;
