import React from "react";

const Counter = ({count, increment, decrement}) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count.count}</div>
      <div className="flex space-x-3">
        <button onClick={() => increment(count.id)} className="bg-indigo-400 text-white px-3 py-2 rounded shadow">
          Increment
        </button>
        <button onClick={() => decrement(count.id)} className="bg-red-400 text-white px-3 py-2 rounded shadow">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
