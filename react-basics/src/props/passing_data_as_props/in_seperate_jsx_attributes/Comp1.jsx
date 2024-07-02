import React from 'react'

const Comp1 = (props) => {

  return (
    <>
      <h1>Component1</h1>
      <h3>{props.numberValue}</h3>
      <h3>{props.booleanValue}</h3>
      <h3>{props.stringValue}</h3>
      <h3>{props.arr} --- {props.arr[2]}</h3>
      {/* //directly accessing entire object is not allowed. so access properties one by one  */}
      <h3>{props.obj.name} , {props.obj.age}</h3>  
      <h3>click the button to execute the function passed as prop</h3>
      <button onClick={props.fun1}>click me to execute the function which is sent as prop</button>
      <br/>
      <button onClick={props.passEvent}>click me to execute the event which is sent as prop</button>
      <h3 style={props.cssStyle}>stying the elements by using the passed object for styling</h3>
      <h3>{props.state}</h3>

      <hr/>
    </>
  )
}

export default Comp1