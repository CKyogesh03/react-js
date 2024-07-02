import React, { useState } from 'react'
import ChildComponent1 from './ChildComponent1';

const Without_UseCallBack = () => {
  const [color,setColor]=useState("red")
  const [lightSwitch, setLightSwitch] = useState("off");
  const pressLightSwitch = () => {
    setLightSwitch((lightSwitch==="off")?"on":"off");
  };
  const fun1=()=>"hii";

  return (
    <>
    <h1>Without_UseCallBack</h1>

    <p>child component is called here</p>
      <ChildComponent1 f1={fun1}/>

      <div>
            <h2> light is {lightSwitch} </h2>
            <button onClick={pressLightSwitch}>press light switch</button>
      </div>
      <hr/>
    </>
  )
}

export default Without_UseCallBack