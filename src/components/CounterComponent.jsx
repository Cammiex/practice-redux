import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '../config/redux/slices/counterSlice';

function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="min-w-[300px] max-w-fit h-[250px] bg-white rounded-xl flex flex-col p-5 gap-4 items-center justify-center text-black shadow-2xl border-[3px] ring-1 border-blue-700">
      <h2 className="font-bold text-xl ">Counter</h2>
      <div className="flex items-center gap-5">
        <button
          className="size-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xl pb-[7px] font-bold hover:scale-110 transition duration-100 active:scale-95"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-xl">{count}</span>
        <button
          className="size-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg pb-[3px] font-bold hover:scale-110 transition duration-100 active:scale-95"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <input
        className="rounded-md text-black p-2 border border-neutral-800"
        type="number"
        onChange={(e) =>
          dispatch(incrementByAmount(parseInt(e.target.value) || 0))
        }
        placeholder="Enter value"
      />
      <div className="flex items-center gap-3">
        <button
          className="h-fit py-1 bg-blue-500 text-white w-[80px] rounded-lg hover:bg-blue-800 active:scale-90 transition"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Add 5
        </button>
        <button
          className="h-fit py-1 bg-red-500 text-white w-[80px] rounded-lg hover:bg-red-800 active:scale-90 transition"
          onClick={() => dispatch(reset(0))}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default CounterComponent;
