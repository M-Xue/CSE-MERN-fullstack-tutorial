import React, { useState } from 'react'
import './login.css'
import axios from 'axios';

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  async function handleSubmit(e) {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password
    }

    // const response = await axios.post('/users/login', loginData);
    // console.log(response);

    // const response = await axios({
    //   method: 'post',
    //   url: '/users/login',
    //   data: loginData
    // });
    // console.log(response);
    
    
    // response.then(res => console.log(res));
    // console.log(returnedData);


    const loginResponse = await fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData) 
    })
    // const returnData = await loginResponse.json();
    // console.log(returnData);
    console.log(loginResponse.status)


  };



  return (
    <div className='login-container'>

      <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' required onChange={e=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' required onChange={e=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
      </form>

    </div>
  )
}