import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import CreateRoom from './Components/CreateRoom/CreateRoom';
import JoinRoom from './Components/JoinRoom/JoinRoom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateRoom />} />
        <Route path="/JoinRoom/:roomName/:userName" element={<JoinRoom />} />
      </Routes>
    </div>
  );
}

export default App;
