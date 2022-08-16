import { invoke } from '@tauri-apps/api';
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

const Button = () => {
  const greetHandler = () => {
    // now we can call our Command!
    // Right-click the application background and open the developer tools.
    // You will see "Hello, World!" printed in the console!
    invoke('greet', { name: 'World' })
      // `invoke` returns a Promise
      .then((response) => console.log(response));
  };

  return <button onClick={greetHandler}>Greet!</button>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
