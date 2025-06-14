import React from "react";
import { Link } from "react-router-dom";

const ProductCart = (props) => {
    const {id,image,title,description,price} = props.product;
    console.log(id)
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white rounded-2xl shadow-xl border border-zinc-700 hover:shadow-2xl transition duration-300 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-t-2xl"
      />

      <div className="p-5 flex flex-col justify-between h-[220px]">
        <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-300 line-clamp-3 mt-1">{description.slice(0,100)}...{" "}<Link to={`/products/${id}`} className="text-blue-500 text-sm">more info</Link></p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-indigo-400 text-lg font-semibold">₹{price}</span>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm hover:opacity-90 transition">
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
