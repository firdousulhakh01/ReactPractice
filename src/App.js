import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [x, setX] = useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Firdousul Hakh</h1>
        <p>
          S/o Hyder Ali & Khadeeja!
        </p>
      </header>
    </div>
  );
}

export default App;
