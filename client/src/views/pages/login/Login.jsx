import { useState } from "react"

const Login = () => {

    // const [email, setEmail] = useState()
    // const [password , setPassword] = useState()

    

  return (
    <>
      <div className="bg-sky-200 space-y-4 p-5 rounded-md shadow-md m-10 w-72">
        <p className="font-semibold text-lg text-center">Login Page</p>
        <div>
            <p>Email</p>
            <input type="email" className="border rounded-md shadow-md" placeholder="Enter Your Email-ID"/>
        </div>
        <div>
            <p>Password</p>
            <input type="password" className="border rounded-md shadow-md" placeholder="Enter Your Password"/>
        </div>
        <div>
            <button className="bg-blue-600 px-4 py-1 rounded-md shadow-md text-white">Login</button>
        </div>
      </div>
    </>
  )
}

export default Login
