import Button from "./components/Button";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import useCounter from "./hooks/useCounter";

const App = () => {
  const {state, totalCount, addCounter, handleReset, increment, decrement} = useCounter();

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {state.map((item) => (
          <div key={item.id}>
            <Counter
              counter={item}
              increment={increment}
              decrement={decrement}
            />
          </div>
        ))}
        <Stats count={totalCount()} />

        <div className="h-auto bg-transparent flex justify-end">
          <div className="flex space-x-3">
            <Button handler={addCounter}>
              + Add Counter
            </Button>
            <Button handler={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
