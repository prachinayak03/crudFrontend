import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
  const [name ,setName] =useState()
  const [email ,setEmail] = useState()
  const [age ,setAge] = useState()
  const navigate = useNavigate()

  const Submit  =(e)=>{
    e.preventDefault();
    axios.post("https://crud-backend-olive-alpha.vercel.app/createUser" , {name , email ,age})
    .then (result =>{
      console.log(result),
      navigate('/')
    })
    .catch (err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Submit}>
        <h2>Add User</h2>
        <div className='mb-2'>
          <label htmlFor=''>Name</label>
          <input type='text' placeholder='Enter Name' className='form-control'
          onChange={(e)=> setName(e.target.value)}
          >
          </input>
        </div>
        <div className='mb-2'>
          <label htmlFor=''>Email</label>
          <input type='text' placeholder='Enter Email' className='form-control'
          onChange={(e)=> setEmail(e.target.value)}>
          </input>
        </div>
        <div className='mb-2'>
          <label htmlFor=''>Age</label>
          <input type='text' placeholder='Enter Age' className='form-control'
          onChange={(e)=> setAge(e.target.value)} ></input>
        </div>
        <button className='btn btn-success'>Submit</button>
      </form>
    </div>
  
</div>
  )
}

export default CreateUser
