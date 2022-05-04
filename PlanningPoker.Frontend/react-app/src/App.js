import './App.scss';
import Card from './Components/Card/Card';

function App() {
  const values = [0, 1, 2, 3, 5, 8, 13, 20, "?", "∞", "☕"];
  return (
    <div className="App">
      <div className="table">
        {values.map(value => <Card value={value}></Card>)}
      </div>
    </div>
  );
}

export default App;
