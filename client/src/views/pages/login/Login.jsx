import axios from "axios"
import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState()
    const [password , setPassword] = useState()

    const handleSubmit = () => {
      const payload = {
        email : email,
        password : password
      }
      // console.log("output : ", payload) 
      axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
      .then((res)=>{
        localStorage.setItem("Token access",JSON.stringify(res.data.access_token))
        alert("Login success!!!")
        console.log("Login successfully",res)
      })
      .catch((err)=>{
        alert("Login failed!!")
        console.log("Login Failed!",err)
      })
    }

  return (
    <>
      <div className="bg-sky-200 space-y-4 p-5 rounded-md shadow-md m-10 w-72">
        <p className="font-semibold text-lg text-center">Login Page</p>
        <div>
            <p>Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control border rounded-md shadow-md" placeholder="Enter Your Email-ID"/>
        </div>
        <div>
            <p>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control border rounded-md shadow-md" placeholder="Enter Your Password"/>
        </div>
        <div>
            <button onClick={handleSubmit} className="btn btn-outline-primary rounded-md shadow-md my-2">Login</button>
        </div>
      </div>
    </>
  )
}

export default Login
