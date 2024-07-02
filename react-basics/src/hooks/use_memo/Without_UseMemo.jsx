import React, { useState } from 'react'

// we can use live timing so state changes per second
const Without_UseMemo = () => {
    const [lightSwitch, setLightSwitch] = useState("off");
    const [count, setCount] = useState(1);
    const calculate = expensiveCalculation(count);
    
    const pressLightSwitch = () => {
        setLightSwitch((lightSwitch==="off")?"on":"off");
      };
      
    const incrementCount = () => {
      setCount((c) => c + 1);
    };
    
    return (
      <div>
        <div>
          <h2> light is {lightSwitch} </h2>
          <button onClick={pressLightSwitch}>press light switch</button>
        </div>

        <hr />

        <div>
          Current Cout is : {count}
          <button onClick={incrementCount}>+</button>
          <h2>Expensive Calculation is going to start</h2>
          {calculate}
        </div>
      </div>
    );
  };
  
  const expensiveCalculation = (c) => {
    console.log("Calculating..."+ c);
    return c*2;
  };

export default Without_UseMemo