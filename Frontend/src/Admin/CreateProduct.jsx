import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { asyncCreateProduct } from '../Store/Actions/ProductAction';
import { NavLink, useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const createProductHandler = (products) => {
    products.id = nanoid()
    console.log(products)
    dispatch(asyncCreateProduct(products))
    reset()
    navigate("/products")    
  } 
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

        {/* Left: Form */}
        <div className="bg-[#1E1E1E] p-8 rounded-2xl shadow-lg border border-gray-700 w-full">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Add New Product</h2>
          <form className="space-y-5" onSubmit={handleSubmit(createProductHandler)}>

            {/* Title */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-400">Product Title</label>
              <input
                {...register("title")}
                type="text"
                placeholder="Wireless Headphones"
                className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-400">Price (₹)</label>
              <input
               {...register("price")}
                type="number"
                placeholder="1999"
                className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-400">Description</label>
              <textarea
               {...register("description")}
                placeholder="Product details..."
                rows="4"
                className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-400">Category</label>
              <input
               {...register("category")}
                type="text"
                placeholder="Electronics"
                className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-400">Image URL</label>
              <input
               {...register("image")}
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition duration-200"
            >
              Create Product
            </button>

           
          </form>
        </div>

        {/* Right: Empty section */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 text-gray-500 flex items-center justify-center">
          {/* You can use this for preview or image upload later */}
          <p className="text-center">Preview / Image Upload / Info Section</p>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
