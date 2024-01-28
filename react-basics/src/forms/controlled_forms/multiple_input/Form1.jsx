import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//seperate variables for every states/properties
function Form1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const nameHandleChange = (event) => {
    const value = event.target.value;
    setName(value);
  }
  const ageHandleChange = (event) => {
    const value = event.target.value;
    setAge(value);
  }

  //to prevent the default form reload when submission
  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    alert(name + ", "+ age); //printing datas when submitting
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={name || ""} 
        onChange={nameHandleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={age || ""} 
          onChange={ageHandleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
export default Form1