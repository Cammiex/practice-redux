import './App.css';
import CounterComponent from './components/CounterComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="w-full h-[100vh] bg-neutral-800 flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-3">
        <CounterComponent />
        <UserComponent />
      </div>
      <h1 className="text-[44px] font-semibold text-white">
        Design Dabblers - B Morning
      </h1>
    </div>
  );
}

export default App;
