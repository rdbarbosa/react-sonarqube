import { useState } from 'react';
import './App.css';

function Count() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Testing React Hooks</h1>
      <p>{count}</p>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Count;
