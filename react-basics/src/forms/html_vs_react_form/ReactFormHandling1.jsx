import React, { useState } from 'react';

function ReactFormHandling1() {
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [pet, setPet] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    switch (type) {
      case 'checkbox':
        setSkills((prevSkills) => {
          if (checked) {
            return [...prevSkills, value];
          } else {
            return prevSkills.filter((skill) => skill !== value);
          }
        });
        break;
      default:
        // Handles text, radio, select, textarea
        if (name === 'gender') {
          setGender(value);
        } else {
          // For other input fields
          switch (name) {
            case 'fname':
              setFirstName(value);
              break;
            case 'pet':
              setPet(value);
              break;
            case 'message':
              setMessage(value);
              break;
            default:
              break;
          }
        }
        break;
    }
  };

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
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        <p>Choose your gender</p>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleInputChange}
        />
        Male
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleInputChange}
        />
        Female
      </label>
      <br />

      <label>
        <p>Select your skills</p>
        <input
          type="checkbox"
          id="skill1"
          name="skill1"
          value="java"
          checked={skills.includes('java')}
          onChange={handleInputChange}
        />
        I know Java
        <input
          type="checkbox"
          id="skill2"
          name="skill2"
          value="reactjs"
          checked={skills.includes('reactjs')}
          onChange={handleInputChange}
        />
        I know React JS
        <input
          type="checkbox"
          id="skill3"
          name="skill3"
          value="mongodb"
          checked={skills.includes('mongodb')}
          onChange={handleInputChange}
        />
        I know MongoDB
      </label>
      <br />

      <label>
        Choose a pet:
        <select
          name="pet"
          id="pet-select"
          value={pet}
          onChange={handleInputChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="parrot">Parrot</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </label>
      <br />

      <label>
        Enter your message:
        <textarea
          rows="3"
          cols="20"
          name="message"
          value={message}
          onChange={handleInputChange}
        ></textarea>
      </label>

      <br />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default ReactFormHandling1;
