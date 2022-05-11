import React, { useState } from 'react'
import './register.css'
import axios from 'axios';

export default function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(-1)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')



  async function handleSubmit(e) {
    e.preventDefault();

    const newUserData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      username: username,
      password: password,
      description: description
    };
    

    // const response = await axios.post('/users/register', newUserData)
    // console.log(response);


    // console.log(JSON.stringify(newUserData));



    // const response1 = await fetch('http://127.0.0.1:5000/users/register', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newUserData) 
    // })

    // console.log(response1.json());
  }

  return (
    <div className='register-container'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='First Name' required onChange={e=>setFirstName(e.target.value)}/>
            <input type="text" placeholder='Last Name' required onChange={e=>setLastName(e.target.value)}/>
            <input type="number" placeholder='Age' min="0" required onChange={e=>setAge(e.target.value)}/>
            <input type="text" placeholder='Username' required onChange={e=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' required onChange={e=>setPassword(e.target.value)}/>
            <textarea placeholder='Describe yourself!' required onChange={e=>setDescription(e.target.value)}/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
