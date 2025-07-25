import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = () => {
    //  const [users , setUser]=useState([{
    //         name:'Yourself', email:"yourself@gmail.com" , age:20
    //     }])
        const [users , setUser]=useState([])
        useEffect(()=>{
            axios.get('http://localhost:3001')
            .then (result => setUser(result.data))
            .catch(err => console.log(err))
        },[])

        const deleteHandler = (id)=>{
            axios.delete('http://localhost:3001/deleteUser/'+id)
            .then(res => {console.log(res)
                window.location.reload()})
            .catch(errr => console.log(errr))
        }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'>Add+</Link>
            <table className='table'> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                <Link to={`/Update/${user._id}`} className='btn btn-success m-1'>Update</Link> 
                                <button className='btn btn-danger'
                                onClick={(e)=>deleteHandler(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            
        </div>
      </div>
  )
}

export default User
