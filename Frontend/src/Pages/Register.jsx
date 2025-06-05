import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncRegister } from "../Store/Actions/UserAction"

const Register = () => {
  const { register, handleSubmit ,reset} = useForm()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const registerHandler = (user) => {
    user.id = nanoid();
    dispatch(asyncRegister(user))
    reset()
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] px-4">
      <div className="w-full max-w-md bg-[#181818] p-8 rounded-2xl shadow-2xl border border-gray-800">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide">Register</h2>

        <form onSubmit={handleSubmit(registerHandler)} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-400">Username</label>
            <input
              {...register("username")}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-[#222222] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-400">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#222222] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-400">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-[#222222] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition duration-200 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-indigo-400 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Register
