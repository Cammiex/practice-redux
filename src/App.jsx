import './App.css';
import CounterComponent from './components/CounterComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-br from-[#2b3994] to-[#f36261] flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-3">
        <CounterComponent />
        <UserComponent />
      </div>
      <div className="text-[44px] bg-gradient-to-br from-[#f36261] to-[#2b3994] font-semibold text-white size-fit py-3 px-10  rounded-full shadow-2xl">
        Design Dabblers - B Morning
      </div>
    </div>
  );
}

export default App;
