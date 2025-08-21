import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaPenClip, FaTrash } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const ViewProduct = () => {
  const [subCategories, setSubCategories] = useState([])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  function viewProducts() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/category`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err))

    axios
      .get(`${import.meta.env.VITE_API_URL}/subcategory`)
      .then((res) => setSubCategories(res.data))
      .catch((err) => console.log(err))
    axios
      .get(`${import.meta.env.VITE_API_URL}/product`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    viewProducts()
  }, [])

  function trash(id) {
    if (confirm('Are You Sure Want To Delete This Product?')) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/product/${id}`)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }
    viewProducts()
  }

  function getCategoryName(id) {
    const cat = categories.find((c) => c.id === id)
    return cat ? cat.category : 'Unknown'
  }

  function getSubcategoryName(id) {
    const subcat = subCategories.find((c) => c.id === id)
    // console.log('subcat...........')
    // console.log(subcat)
    return subcat ? subcat.subcategory : 'Unknown'
  }

  return (
    <>
      <div className="container mx-auto my-5 p-5 shadow">
        <h1>View Product</h1>
        <table className="table table-striped table-hover table-success">
          <thead className="table table-dark">
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Name</th>
              <th>Price</th>
              <th>Created Date</th>
              <th>Updated Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(
                ({ id, categoryId, subcategoryId, p_name, p_price, createdAt, updatedAt }, index) => (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{getCategoryName(categoryId)}</td>
                    <td>{getSubcategoryName(subcategoryId)}</td>
                    <td>{p_name}</td>
                    <td>{p_price}</td>
                    <td>{createdAt ? new Date(createdAt).toDateString() : '-'}</td>
                    <td>{updatedAt ? new Date(updatedAt).toDateString() : '-'}</td>
                    <td>
                      <button onClick={() => trash(id)} className="btn btn-danger mx-1">
                        <FaTrash />
                      </button>
                      <NavLink to={`/product/update/${id}`} className="btn btn-primary"><FaPenClip/></NavLink>
                    </td>
                  </tr>
                ),
              )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ViewProduct
