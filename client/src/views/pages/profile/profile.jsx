import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [userData, setuserData] = useState({
    name:'',
    email:'',
    role:''
  })
  const redirect = useNavigate()
  console.log(userData)

  const getProfileData = () => {
    const token = localStorage.getItem('token')

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
    setuserData()
    localStorage.removeItem('token')
    alert('Logout Successfully!')
    redirect("/login")
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
          <img className="rounded-full h-20 w-20 object-cover" src={userData?.avatar} alt="" />
        </div>
      )}
    </>
  )
}

export default Profile
