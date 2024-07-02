import React, { useState } from 'react'
import PrintName from './PrintName';

const Counter1 = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");
  
    const increment = () => {
      setCount((c) => c + 1);
    };

    console.log("parent component Counter is rendering")
    return (
      <>
        <PrintName c1={color} />
        
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
}

export default Counter1