import React from 'react';

function ReactFormOptimisedFormat2() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform actions with the form data, e.g., submit to server
        console.log({
          firstName,
          gender,
          skills,
          pet,
          message,
        });
      };
  return (
    <form>
      <label>
        First name:
        <input type="text" id="fname" name="fname" />
      </label>
      <br />

      <label>
        <p>Choose your gender</p>
        <input type="radio" id="male" name="gender" value="male" />
        Male
        <input type="radio" id="female" name="gender" value="female" />
        Female
      </label>
      <br />

      <label>
        <p>Select your skills</p>
        <input type="checkbox" id="skill1" name="skill1" value="java" />
        I know Java
        <input type="checkbox" id="skill2" name="skill2" value="reactjs" />
        I know React JS
        <input type="checkbox" id="skill3" name="skill3" value="mongodb" />
        I know MongoDB
      </label>
      <br />

      <label>
        Choose a pet:
        <select name="pet" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="parrot">Parrot</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </label>
      <br />

      <label>
        Enter your message:
        <textarea rows="3" cols="20"></textarea>
      </label>

      <br />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default ReactFormOptimisedFormat2;
