import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//note: storing all properties/states in a single object
function Form2() {
  const [inputs, setInputs] = useState({});

  //to update the data in our state variable. whenever input field value changes - even single character
  const handleChange = (event) => {
    // console.log(event)
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value})) //spread operator used to bcoz // without spread operator gives value to current property and other properties are empty
  }

  //to prevent the default form reload when submission
  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
export default Form2