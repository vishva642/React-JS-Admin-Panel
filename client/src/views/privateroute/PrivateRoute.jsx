// import { Navigate, Outlet } from "react-router-dom"

// const PrivateRoute = () => {
//     const token = localStorage.getItem("token")
//   return token == null ? <Navigate to='/login'/> : <Outlet/>
// }

// export default PrivateRoute

import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
  const token = localStorage.getItem("token")
  return token ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
