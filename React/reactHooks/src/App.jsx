import { useState } from 'react';

/**
 * useState(0) - tool to do something in react. 
 * It returns count and setCount
 * count - state
 * setCount - method with exclusive rights to change count, no one else can.  
 */

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    // setCount(count + 1);

    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  // function decrease() {
  //   setCount(count - 1);
  // }

  return (
    <>
      <h1>React Hooks : useState</h1>
      <h2>React state</h2>

      <p>Counter : {count}</p>

      <button
      onClick = {increase}
      >
        count : {count} 
        💹
      </button>

      <button
      onClick={()=>{setCount(count - 1)}}
      >
        count : {count} 
        📉
      </button>
    </>
  )
}

export default App
