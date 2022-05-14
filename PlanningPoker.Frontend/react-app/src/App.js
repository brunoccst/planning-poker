import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import CreateRoom from './Components/CreateRoom/CreateRoom';
import JoinRoom from './Components/JoinRoom/JoinRoom';
import PokerRoom from './Components/PokerRoom/PokerRoom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateRoom />} />
        <Route path="/JoinRoom/:roomName/:userName" element={<JoinRoom />} />
        <Route path="/PokerRoom" element={<PokerRoom />} />
      </Routes>
    </div>
  );
}

export default App;
