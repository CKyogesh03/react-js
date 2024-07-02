import React from 'react'

const Comp1 = (props) => {
    //destructuring - name must be same //we can use directly without destructuring
    //passed object is stored as nested object in props object
    //boolean value is not accessed directy present in object. so use conditions to check and print.
    const { obj } = props;
  return (
    <>
        <div>Comp1 in object access</div>
        <h3>{props.obj.numberValue}</h3>
        <h3>{obj.numberValue}</h3>
        <h3>{props.obj.booleanValue ? 'True' : 'False'}</h3>
        <h3>{obj.stringValue}</h3>
        <h3>{obj.arr} --- {obj.arr[2]}</h3>
        {/* //directly accessing entire object is not allowed. so access properties one by one  */}
        <h3>{obj.obj.name} , {obj.obj.age}</h3>  
        <h3>click the button to execute the function passed as prop</h3>
        <button onClick={obj.fun1}>click me to execute the function which is sent as prop</button>
        <br/>
        <button onClick={obj.passEvent}>click me to execute the event which is sent as prop</button>
        <h3 style={obj.cssStyle}>stying the elements by using the passed object for styling</h3>
        <h3>{obj.state}</h3>
    </>
  )
}

export default Comp1