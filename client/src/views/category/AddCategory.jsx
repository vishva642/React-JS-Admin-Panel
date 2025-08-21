import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Flip, toast, ToastContainer } from 'react-toastify'

const AddCategory = () => {
  const { register, handleSubmit, reset, formState:{errors} } = useForm()
  const redirect = useNavigate()
  const { id } = useParams()
  const [categories, setCategories] = useState([])
  const [createdAt, setCreatedAt] = useState(null) // State to hold createdAt date
  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/category/${id}`)
        .then((res) => {
          reset({ category: res.data.category })
          setCreatedAt(res.data.createdAt)
        })
        .catch((err) => console.log(err))
    }
  }, [id, reset])


  ////////////// get all category data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/category`)
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  function category(data) {
    // Duplicate check sirf Add ke time pe karna hai

    if (!id) {
      const isDuplicate = categories.find((cat) => {
        return cat.category.toLowerCase() == data.category.toLowerCase()
      })

      if (isDuplicate) {
        toast.error('🦄 Its already exist!', {
          position: 'top-center',
          autoClose: 3000,
          theme: 'dark',
          transition: Flip,
        })
        return
      }
    }

    if (id) {
      // Update Mode
      const newData = { ...data, createdAt : createdAt, updatedAt: new Date()}
      axios
        .put(`${import.meta.env.VITE_API_URL}/category/${id}`, newData)
        .then(() => {
          // toast.success('✅ Category Updated!', { autoClose: 2000 })
          redirect('/category/view')
        })
        .catch((err) => console.log(err))
    } else {
      // Add Mode
      const newData = { ...data, createdAt: new Date() }
      axios
        .post(`${import.meta.env.VITE_API_URL}/category`, newData)
        .then(() => {
          toast.success('✅ Category Added!', { autoClose: 2000 })
          reset()
          redirect('/category/view')
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <div className="container mx-auto my-5 p-5 shadow">
        <h1>{id ? 'Update Category' : 'Add Category'}</h1>
        <form onSubmit={handleSubmit(category)}>
          <div className="mt-4">
            <input
              type="text"
              {...register('category', {
                required: {
                  value: true,
                  message: 'Enter The Category Name',
                },
                minLength: {
                  value: 2,
                  message: 'Enter minimum 2 characters',
                },
                maxLength: {
                  value: 50,
                  message: 'Enter maximum 50 characters',
                },
              })}
              placeholder="Enter Category Name"
              className="form-control"
            />
            <p className="text-danger">{errors?.category?.message}</p>
          </div>
          <div className="mt-4">
            <button className={`btn ${id ? 'btn-outline-warning' : 'btn-outline-success'}`}>
              {id ? 'Update' : 'Submit'}
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCategory
