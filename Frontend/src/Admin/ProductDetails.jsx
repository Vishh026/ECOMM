import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../Store/Actions/ProductAction";

const ProductDetails = () => {
   const {
    productReducer :{ products },
    userReducer : {users}
  } = useSelector((state) => state);
  console.log(products,users);
  //getproduct
  const { id } = useParams();
  //get single product
  const product = products?.find((product) => product.id == id);

 
  

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      description: product?.description,
      title: product?.title,
      category: product?.category,
      price: product?.price,
    },
  });
  const dispatch = useDispatch();

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
  };
  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
  };

  return product ? (
    <>
      <div className=" bg-gradient-to-b from-black via-zinc-900 to-black p-0 text-white flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-black rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[600px] object-contain p-5"
          />
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-5xl font-bold leading-snug uppercase">
            {product.title}
          </h1>
          <p className="text-indigo-400 text-lg uppercase font-medium">
            {product.category}
          </p>
          <p className="text-gray-300 leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-4 text-2xl font-bold text-indigo-400">
            ₹{product.price}
          </div>
          <button className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition w-max">
            Add to Cart
          </button>
        </div>
      </div>
     {users && users.isAdmin && (
       <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Left: Form */}
          <div className="bg-[#1E1E1E] p-8 rounded-2xl shadow-lg border border-gray-700 w-full">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Add New Product
            </h2>
            <form
              className="space-y-5"
              onSubmit={handleSubmit(updateProductHandler)}
            >
              {/* Title */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-400">
                  Product Title
                </label>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="Wireless Headphones"
                  className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-400">
                  Price (₹)
                </label>
                <input
                  {...register("price")}
                  type="number"
                  placeholder="1999"
                  className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-400">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Product details..."
                  rows="4"
                  className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              {/* Category */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-400">
                  Category
                </label>
                <input
                  {...register("category")}
                  type="text"
                  placeholder="Electronics"
                  className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-400">
                  Image URL
                </label>
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
                Update Product
              </button>
            </form>
            <button
              onClick={deleteHandler}
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition duration-200"
            >
              Delete Product
            </button>
          </div>

          {/* Right: Empty section */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 text-gray-500 flex items-center justify-center">
            {/* You can use this for preview or image upload later */}
            <p className="text-center">Preview / Image Upload / Info Section</p>
          </div>
        </div>
      </div>
     )}
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProductDetails;
