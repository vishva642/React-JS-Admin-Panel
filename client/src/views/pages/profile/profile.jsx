import axios from 'axios'
import React from 'react'

const profile = () => {

    const getProfileData = () => {

        const token = JSON.parse(localStorage.getItem('token'))

        const header = {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
    
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
        .then((res)=>{
            console.log("profile data",res)
        })
        .catch((err)=>{
            console.log("error occured",err)
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        alert("Logout Successfully!")
    }

  return (
    <>
      <h1>This is Profile</h1>
      <button className='btn btn-outline-dark' onClick={getProfileData}>Get Profile Data</button>
      <button className='btn btn-outline-light' onClick={handleLogout}>Get Profile Data</button>
      <div>
        <p>Role : </p>
        <p>Name : </p>
        <p>Email : </p>
      </div>
    </>
  )
}

export default profile
