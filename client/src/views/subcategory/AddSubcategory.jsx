import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer, Flip } from 'react-toastify'

const AddSubCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const redirect = useNavigate()
  const { id } = useParams()
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [createdAt, setCreatedAt] = useState(null) // State to hold createdAt date
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/category`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err))
  }, [])
  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/subcategory/${id}`)
        .then((res) => {
          reset({
            categoryId: res.data.categoryId,
            subcategory: res.data.subcategory,
          })
          setCreatedAt(res.data.createdAt)
        })
        .catch((err) => console.log(err))
    }
  }, [id, reset])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/subcategory`)
      .then((res) => {
        setSubcategories(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  function subcat(data) {
    if (!id) {
      const isDuplicate = subcategories.find((cat) => {
        return cat.subcategory.toLowerCase() == data.subcategory.toLowerCase()
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
      // ✅ Update Mode
      axios
        .get(`${import.meta.env.VITE_API_URL}/subcategory/${id}`) // pehle purana record lelo
        .then(() => {
          axios
            .put(`${import.meta.env.VITE_API_URL}/subcategory/${id}`, {
              ...data,
              createdAt : createdAt,
              updatedAt: new Date(),
            })
            .then(() => {
              // toast.success('✅ SubCategory Updated!', { autoClose: 2000, transition: Flip })
              redirect('/subcategory/view')
            })
        })
        .catch((err) => console.log(err))
    } else {
      // ✅ Add Mode
      axios
        .post(`${import.meta.env.VITE_API_URL}/subcategory`, {
          ...data,
          createdAt: new Date(), // 👈 new record ke liye createdAt add
        })
        .then(() => {
          // toast.success('✅ SubCategory Added!', { autoClose: 2000, transition: Flip })
          reset()
          redirect('/subcategory/view')
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="container mx-auto my-5 p-5 shadow">
      <h1>{id ? 'Update SubCategory' : 'Add SubCategory'}</h1>
      <form onSubmit={handleSubmit(subcat)}>
        {/* Category Select */}
        <div className="mt-4">
          <select
            {...register('categoryId', {
              required: {
                value: true,
                message: 'Please Select Category',
              },
            })}
            className="form-control"
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category}
              </option>
            ))}
          </select>
          <p className="text-danger">{errors?.categoryId?.message}</p>
        </div>

        {/* SubCategory Input */}
        <div className="mt-4">
          <input
            type="text"
            {...register('subcategory', {
              required: {
                value: true,
                message: 'Enter The Subcategory Name',
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
            // {...register('subcategory', { required: true })}
            placeholder="Enter SubCategory Name"
            className="form-control"
          />
          <p className="text-danger">{errors?.subcategory?.message}</p>
        </div>

        <div className="mt-4">
          <button className={`btn ${id ? 'btn-outline-warning' : 'btn-outline-success'}`}>
            {id ? 'Update' : 'Submit'}
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  )
}

export default AddSubCategory
