import React, { useState } from 'react'
import PrintName from './PrintName';

// React.memo( ) used in the defaut export of child component.

const Counter2 = () => {
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

export default Counter2