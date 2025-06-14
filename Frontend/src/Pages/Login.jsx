import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom'
import { asyncLoginUser } from "../Store/Actions/UserAction";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = (user) => {
    user.id = nanoid()
    reset()
    dispatch(asyncLoginUser(user))
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] px-4">
      <div className="w-full max-w-md bg-[#181818] p-8 rounded-2xl shadow-2xl border border-gray-800">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide">Login</h2>

        <form onSubmit={handleSubmit(loginHandler)} className="space-y-6">
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
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{' '}
          <NavLink to="/register" className="text-indigo-400 hover:underline">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Login
