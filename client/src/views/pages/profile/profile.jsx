import axios from 'axios'
import { useState } from 'react'

const Profile = () => {
  const [userData, setuserData] = useState()

  console.log(userData)

  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem('token'))

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    axios
      .get('https://api.escuelajs.co/api/v1/auth/profile', header)
      .then((res) => {
        setuserData(res.data)
        console.log('profile data', res)
      })
      .catch((err) => {
        alert("You are not logged in!!")
        console.log('error occured', err)
      })
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    alert('Logout Successfully!')
  }

  return (
    <>
      <h1>This is Profile</h1>
      <button className="btn btn-outline-dark mx-1" onClick={getProfileData}>
        Get Profile Data
      </button>
      <button className="btn btn-outline-dark" onClick={handleLogout}>
        Log Out
      </button>

      {userData && (
        <div>
          <p>Name : {userData?.name || 'N/A'} </p>
          <p>Email : {userData?.email || 'N/A'} </p>
          <p>Role : {userData?.role || 'N/A'} </p>
          <img className="rounded-full h-20 w-20" src={userData?.avatar} alt="" />
        </div>
      )}
    </>
  )
}

export default Profile
