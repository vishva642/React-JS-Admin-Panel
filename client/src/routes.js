// import { element } from 'prop-types'
// import React, { Children } from 'react'

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// // Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const AddCategory = React.lazy(()=>import('./views/category/AddCategory'))
// const ViewCategory = React.lazy(()=>import('./views/category/ViewCategory'))
// const UpdateCategory = React.lazy(()=>import('./views/category/AddCategory'))
// const AddSubcategory = React.lazy(()=>import('./views/subcategory/AddSubcategory'))
// const ViewSubcategory = React.lazy(()=>import('./views/subcategory/ViewSubcategory'))
// const UpdateSubcategory = React.lazy(()=>import('./views/subcategory/AddSubcategory'))
// const AddProduct = React.lazy(()=>import('./views/product/AddProduct'))
// const ViewProduct = React.lazy(()=>import('./views/product/ViewProduct'))
// const UpdateProduct = React.lazy(()=>import('./views/product/AddProduct'))
// const Login = React.lazy(()=>import('./views/pages/login/Login'))
// const Profile = React.lazy(()=>import('./views/pages/profile/profile'))
// const Privateroute = React.lazy(()=>import('./views/privateroute/PrivateRoute'))

// const routes = [
//   { path: '/login', name:'Login', element: Login},
//   {
//     element:Privateroute,
//     Children : [
//   { path: '/', exact: true, name: 'Home' },
//   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
//   { path: '/base', name: 'Base', element: Cards, exact: true },
//   { path: '/base/accordion', name: 'Accordion', element: Accordion },

//   { path: '/category/add', name: 'Add', element: AddCategory},
//   { path: '/category/view', name: 'View', element: ViewCategory},
//   { path: '/category/update/:id', name: 'Update', element: UpdateCategory},

//   { path: '/subcategory/add', name: 'Add', element: AddSubcategory},
//   { path: '/subcategory/view', name: 'View', element: ViewSubcategory},
//   { path: '/subcategory/update/:id', name: 'Update', element: UpdateSubcategory},

//   { path: '/product/add', name: 'Add', element: AddProduct},
//   { path: '/product/view', name: 'View', element: ViewProduct},
//   { path: '/product/update/:id', name: 'View', element: UpdateProduct},

//   { path: '/profile', name:'Profile', element: Profile}
//     ]
//   }

// ]

// export default routes



import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))

// Category
const AddCategory = React.lazy(()=>import('./views/category/AddCategory'))
const ViewCategory = React.lazy(()=>import('./views/category/ViewCategory'))
const UpdateCategory = React.lazy(()=>import('./views/category/AddCategory'))

// Subcategory
const AddSubcategory = React.lazy(()=>import('./views/subcategory/AddSubcategory'))
const ViewSubcategory = React.lazy(()=>import('./views/subcategory/ViewSubcategory'))
const UpdateSubcategory = React.lazy(()=>import('./views/subcategory/AddSubcategory'))

// Product
const AddProduct = React.lazy(()=>import('./views/product/AddProduct'))
const ViewProduct = React.lazy(()=>import('./views/product/ViewProduct'))
const UpdateProduct = React.lazy(()=>import('./views/product/AddProduct'))

// Pages
const Login = React.lazy(()=>import('./views/pages/login/Login'))
const Profile = React.lazy(()=>import('./views/pages/profile/profile'))

// Private Route
const PrivateRoute = React.lazy(()=>import('./views/privateroute/PrivateRoute'))

const routes = [
  // 👇 Always accessible
  { path: '/login', name:'Login', element: Login },

  // 👇 Protected Routes (accessible only after login)
  {
    element: PrivateRoute,   // 🔐 Wrapper for private routes
    children: [
      { path: '/', exact: true, name: 'Home', element: Dashboard },
      { path: '/dashboard', name: 'Dashboard', element: Dashboard },

      { path: '/base', name: 'Base', element: Cards, exact: true },
      { path: '/base/accordion', name: 'Accordion', element: Accordion },

      { path: '/category/add', name: 'Add Category', element: AddCategory },
      { path: '/category/view', name: 'View Category', element: ViewCategory },
      { path: '/category/update/:id', name: 'Update Category', element: UpdateCategory },

      { path: '/subcategory/add', name: 'Add Subcategory', element: AddSubcategory },
      { path: '/subcategory/view', name: 'View Subcategory', element: ViewSubcategory },
      { path: '/subcategory/update/:id', name: 'Update Subcategory', element: UpdateSubcategory },

      { path: '/product/add', name: 'Add Product', element: AddProduct },
      { path: '/product/view', name: 'View Product', element: ViewProduct },
      { path: '/product/update/:id', name: 'Update Product', element: UpdateProduct },

      { path: '/profile', name:'Profile', element: Profile },
    ],
  },
]

export default routes
