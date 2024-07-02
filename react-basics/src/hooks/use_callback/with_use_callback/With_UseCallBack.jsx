import React, { useCallback, useState } from 'react'
import ChildComponent1 from './ChildComponent1';

const With_UseCallBack = () => {
    const [color,setColor]=useState("red")
  const [lightSwitch, setLightSwitch] = useState("off");
  const pressLightSwitch = () => {
    setLightSwitch((lightSwitch==="off")?"on":"off");
  };
  const fun1=useCallback(()=>"hii",[color])

  return (
    <>
    <h1>With_UseCallBack</h1>

      <p>child component is called here</p>
      <p>passed callback function maintains the same address even it re-renders. address is maintained by useCallback hook</p>
      <ChildComponent1 f1={fun1}/>

      <div>
            <h2> light is {lightSwitch} </h2>
            <button onClick={pressLightSwitch}>press light switch</button>
      </div>
    </>
  )
}

export default With_UseCallBack