import { useState } from 'react';
import './App.css';


function App() {
  const [count , setCount] = useState(0) 

  function handleAdd(){
    setCount(count + 1)
  }
  function handleSub(){
    setCount(count - 1)
  } // same for resetting
  return (
    <div className='App'>
      <div className='box'>
        <p>{count}</p>
        <button onClick={handleAdd} className='add'>ADD</button>
        <button onClick={handleSub} className='sub'>SUB</button>
      </div>
    </div>
  );
}

export default  App; 