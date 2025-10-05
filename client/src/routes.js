// import { element } from 'prop-types'

import React from 'react'

const Dashboard = React.lazy(() => import('./abouts/dashboard/Dashboard'))

// Base
const Accordion = React.lazy(() => import('./abouts/base/accordion/Accordion'))
const Cards = React.lazy(() => import('./abouts/base/cards/Cards'))
const AddCategory = React.lazy(()=>import('./abouts/category/AddCategory'))
const ViewCategory = React.lazy(()=>import('./abouts/category/aboutCategory'))
const UpdateCategory = React.lazy(()=>import('./abouts/category/AddCategory'))
const AddSubcategory = React.lazy(()=>import('./abouts/subcategory/AddSubcategory'))
const ViewSubcategory = React.lazy(()=>import('./abouts/subcategory/aboutSubcategory'))
const UpdateSubcategory = React.lazy(()=>import('./abouts/subcategory/AddSubcategory'))
const AddProduct = React.lazy(()=>import('./abouts/product/AddProduct'))
const ViewProduct = React.lazy(()=>import('./abouts/product/aboutProduct'))
const UpdateProduct = React.lazy(()=>import('./abouts/product/AddProduct'))

const routes = [
  
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },

  { path: '/category/add', name: 'Add', element: AddCategory},
  { path: '/category/about', name: 'View', element: ViewCategory},
  { path: '/category/update/:id', name: 'Update', element: UpdateCategory},

  { path: '/subcategory/add', name: 'Add', element: AddSubcategory},
  { path: '/subcategory/about', name: 'View', element: ViewSubcategory},
  { path: '/subcategory/update/:id', name: 'Update', element: UpdateSubcategory},

  { path: '/product/add', name: 'Add', element: AddProduct},
  { path: '/product/about', name: 'View', element: ViewProduct},
  { path: '/product/update/:id', name: 'View', element: UpdateProduct},

]
  


export default routes

