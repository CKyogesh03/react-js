import React from 'react';

const ReactForm = () => {
  return (
    <form>
        <label>First name: 
          <input type="text" id="fname" name="fname" />
        </label>
        <br/>

        <p>Choose your gender</p>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label><br />
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label><br />

        <p>Select your skills</p>
        <input type="checkbox" id="skill1" name="skill1" value="java" />
        <label htmlFor="skill1">I know Java</label><br />
        <input type="checkbox" id="skill2" name="skill2" value="reactjs" />
        <label htmlFor="skill2">I know React JS</label><br />
        <input type="checkbox" id="skill3" name="skill3" value="mongodb" />
        <label htmlFor="skill3">I know MongoDB</label><br />

        <label>Choose a pet:
        <select name="pet" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="parrot">Parrot</option>
          <option value="goldfish">Goldfish</option>
        </select>
        </label>
        <br />

        <label>Enter your message:
          <textarea rows="3" cols="20"></textarea>
        </label>
        
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
  );
};

export default ReactForm;
