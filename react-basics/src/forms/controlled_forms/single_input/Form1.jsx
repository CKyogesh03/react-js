import { useState } from 'react';

function Form1() {
  const [name, setName] = useState("");
//note: we can also directly use these handler functions instead of storing seperately. but it is not readable.
  const handleSubmit = (event) => {
                                    event.preventDefault();
                                    alert(`The name you entered was: ${name}`)
                                    console.log(event)
                                  }

  const handleChange=(e) => { 
                              setName(e.target.value); 
                              console.log(e.target.value)
                            }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form1